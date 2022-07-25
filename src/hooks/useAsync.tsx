import { useCallback, useState } from 'react'

export const useAsync = <T, E = string>(asyncFunction: (...args: any) => Promise<T>) => {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
    >('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute: (asyncFunctionArgs: any[]) => void = useCallback((asyncFunctionArgsArgs ) => {
    setStatus('pending')
    setValue(null)
    setError(null)
    return asyncFunction(...asyncFunctionArgsArgs)
      .then((response: any) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error: any) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  return { execute, status, value, error }
}