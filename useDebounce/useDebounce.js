import { useState, useEffect } from 'react'
import useTimeout from '../timeout/useTimeout'


// run something but only after a delay
// delay running something by delay if invoked before delay is complete
function useDebounce(callback, delay, dependencies) {
  // console.log('useDebounce...', callback, delay)
  const { clear, reset } = useTimeout(callback, delay)

  useEffect(reset, [...dependencies, reset])

  // important: clear function first time 
  //            otherwise callback will be invoked upon initialization
  useEffect(clear, [])
}

export default useDebounce;
