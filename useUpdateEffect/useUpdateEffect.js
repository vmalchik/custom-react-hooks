import { useState, useEffect, useRef } from 'react'
import useTimeout from '../timeout/useTimeout'

// prevent side-effect from happening on initial render
function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)
  const d = useRef(dependencies)
  useEffect(() => {
    // console.log('d', d.current)
    console.log(dependencies === d.current)
    // console.log('useEffect', firstRenderRef.current)
    if (firstRenderRef.current) {
      firstRenderRef.current = false 
      return
    } 
    // console.log('return..')
    return callback()
  }, dependencies)

}

export default useUpdateEffect;
