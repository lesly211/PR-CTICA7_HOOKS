import { useEffect, useRef } from 'react'

function useLogger(value) {
  const renders = useRef(0)

  useEffect(() => {
    renders.current += 1
  })

  return renders.current
}

export default useLogger
