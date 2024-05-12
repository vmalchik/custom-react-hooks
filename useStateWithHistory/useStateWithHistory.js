import { useState, useEffect, useRef } from 'react'
import useArray from '../array/useArray'

function useStateWithHistory(initial) {
  const [value, addValue] = useState(initial)
  const [current, setCurrent] = useState(value)
  const { array, set, push } = useArray([])
  const pointerRef = useRef()
  const arrRef = useRef(array)

  useEffect(() => {
    arrRef.current = array
  }, [array])

  useEffect(() => {
    push(value)
    if (pointerRef.current === undefined) {
      pointerRef.current = 0
    } else if (pointerRef.current < arrRef.current.length -1) {
      set([...arrRef.current.slice(0, pointerRef.current + 1)])
      push(value)
      pointerRef.current = pointerRef.current + 1
    } else {
      pointerRef.current = pointerRef.current + 1
    }
    setCurrent(value)
  }, [value, push, set])


  const back = () => {
    if (pointerRef.current === 0) return
    pointerRef.current = pointerRef.current - 1
    setCurrent(array[pointerRef.current])
  }

  const forward = () => {
    if (pointerRef.current === array.length - 1) return
    pointerRef.current = pointerRef.current + 1
    setCurrent(array[pointerRef.current])
  }

  const go = (index) => {
    if (index < 0 || index > array.length - 1) return
    // console.log(index)
    pointerRef.current = index
    setCurrent(array[pointerRef.current])
  }

  return [current, addValue, { 
    history: array, 
    pointer: pointerRef.current, 
    back, 
    forward, 
    go 
  }]

}

export default useStateWithHistory;
