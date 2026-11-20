import { documentUrl, isDocumentMetadataValid, validateDocument, type DocumentExtension } from './documents'

const mimeTypes: Record<DocumentExtension, string> = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}

export async function downloadValidatedDocument(path: string, filename: string) {
  if (!isDocumentMetadataValid(path)) {
    throw new Error('This document is not available for download.')
  }

  const validation = await validateDocument(path)
  if (!validation.available) throw new Error(validation.message ?? 'This document is not available for download.')

  const response = await fetch(documentUrl(path), { credentials: 'same-origin' })
  if (!response.ok) throw new Error('The document could not be found.')

  const expectedType = mimeTypes[path.split('?')[0].split('.').pop()?.toLowerCase() as DocumentExtension]
  const contentType = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase()
  if (contentType !== expectedType) throw new Error('The server returned an invalid document type.')

  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = filename
  link.click()
  URL.revokeObjectURL(objectUrl)
}
