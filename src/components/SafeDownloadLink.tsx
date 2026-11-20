import { useId, useState, type MouseEvent, type ReactNode } from 'react'
import { downloadValidatedDocument } from '@/lib/downloads'
import { useDocumentValidation } from '@/hooks/use-document-validation'
import { cn } from '@/lib/utils'

type Props = {
  path: string
  filename?: string
  className?: string
  children: ReactNode
  'aria-label'?: string
  'data-analytics'?: string
}

export function SafeDownloadLink({ path, filename, className, children, ...attributes }: Props) {
  const [error, setError] = useState('')
  const errorId = useId()
  const validation = useDocumentValidation(path)
  const unavailable = validation.status !== 'available'

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (unavailable) return
    setError('')
    try {
      await downloadValidatedDocument(path, filename ?? decodeURIComponent(path.split('/').pop() ?? 'document'))
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'The document could not be downloaded.')
    }
  }

  return (
    <a
      href="#"
      {...attributes}
      className={cn(className, unavailable && 'pointer-events-none cursor-not-allowed text-muted-foreground grayscale')}
      onClick={handleClick}
      aria-disabled={unavailable}
      title={unavailable ? (validation.message ?? 'Document currently unavailable') : undefined}
      aria-describedby={error || unavailable ? errorId : undefined}
    >
      {children}
      {error ? (
        <span id={errorId} role={error ? 'alert' : undefined} className="sr-only">
          {error || validation.message}
        </span>
      ) : null}
    </a>
  )
}
