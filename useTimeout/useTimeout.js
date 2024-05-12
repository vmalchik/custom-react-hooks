import { useState, useEffect, useRef, useCallback } from 'react'


function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  // in-case callback function changes
  // prevents consumers from needing to use useCallback
  // eg. useTimeout(useCallback(() => ..., []), delay)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // update set() function if delay changes
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  // re-invoke set() if delay changes
  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }

}

export default useTimeout;
