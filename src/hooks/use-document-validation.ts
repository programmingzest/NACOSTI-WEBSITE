import { useEffect, useState } from 'react'
import { validateDocument } from '@/lib/documents'

export function useDocumentValidation(path: string) {
  const [state, setState] = useState<{ path: string; status: 'checking' | 'available' | 'unavailable'; message?: string }>({ path: '', status: 'checking' })

  useEffect(() => {
    let active = true
    void validateDocument(path).then((result) => {
      if (active) setState({ path, status: result.available ? 'available' : 'unavailable', message: result.message })
    })
    return () => { active = false }
  }, [path])

  return state.path === path ? state : { status: 'checking' as const, message: undefined }
}
