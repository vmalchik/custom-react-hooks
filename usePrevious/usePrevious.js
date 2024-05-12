import { useState, useEffect, useRef } from 'react'

function usePrevious(current) {
  // const [previous, setPrevious] = useState(current)
  // const last = useRef()
  
  // useEffect(() => {
  //     if(last.current !== current) {
  //      setPrevious(last.current)
  //      last.current = current
  //     }
  // }, [current])

  
  // return previous

  const currentRef = useRef(current)
  const previousRef = useRef()

  if (currentRef.current !== current) {
    previousRef.current = currentRef.current
    currentRef.current = current
  }

  return previousRef.current

}

export default usePrevious;
