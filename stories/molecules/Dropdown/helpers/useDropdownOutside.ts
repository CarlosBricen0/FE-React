import { useEffect, useRef } from 'react'

export const useDropdownOutside = <T extends HTMLElement = HTMLElement>(callback: (e?: MouseEvent) => void) => {
  const ref = useRef<T>()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback(event)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ref
}
