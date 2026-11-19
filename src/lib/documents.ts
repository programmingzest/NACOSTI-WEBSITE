const allowedExtensions = ['pdf', 'doc', 'docx'] as const
export type DocumentExtension = (typeof allowedExtensions)[number]

export const availableDocuments = new Set([
  'NACOSTI Strategic Plan 2023-2027.pdf',
  'NACOSTI-SERVICE-CHARTER Dec 2018.pdf',
  'National STI Priorities.pdf',
  'Registered Research Institutions.pdf',
  'The-Science-Technology-and-Innovation-Regulations-2014.pdf',
  'Multisectoral-STI-Conference-Resolutions.pdf',
])

export function documentUrl(path: string) {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path
  const normalized = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

export function getDocumentExtension(path: string): DocumentExtension | null {
  const extension = path.split('?')[0].split('.').pop()?.toLowerCase()
  return allowedExtensions.includes(extension as DocumentExtension) ? extension as DocumentExtension : null
}

export function isAllowedDocument(path: string) {
  return Boolean(getDocumentExtension(path))
}

export function isDocumentAvailable(path: string) {
  if (!isDocumentMetadataValid(path)) return false
  let filename = ''
  try { filename = decodeURIComponent(path.slice('/documents/'.length)) } catch { return false }
  return availableDocuments.has(filename)
}

export function isDocumentRegistered(path: string) {
  if (!path.startsWith('/documents/')) return false
  try { return availableDocuments.has(decodeURIComponent(path.slice('/documents/'.length))) } catch { return false }
}

export function isDocumentMetadataValid(path: string) {
  return isAllowedDocument(path) && isDocumentRegistered(path)
}

function expectedMimeType(path: string) {
  const extension = getDocumentExtension(path)
  return extension === 'pdf'
    ? 'application/pdf'
    : extension === 'doc'
      ? 'application/msword'
      : extension === 'docx'
        ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        : null
}

export async function validateDocument(path: string) {
  if (!isDocumentMetadataValid(path)) return { available: false, message: 'Resource not yet published' }
  try {
    let response = await fetch(documentUrl(path), { method: 'HEAD', cache: 'no-store' })
    if (response.status === 405) {
      response = await fetch(documentUrl(path), { headers: { Range: 'bytes=0-0' }, cache: 'no-store' })
    }
    if (!response.ok) return { available: false, message: 'Document currently unavailable' }
    const contentType = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase()
    if (contentType !== expectedMimeType(path)) return { available: false, message: 'Document currently unavailable' }
    return { available: true }
  } catch {
    return { available: false, message: 'Document currently unavailable' }
  }
}

export function isSafeDownload(path: string) {
  return isDocumentMetadataValid(path)
}
