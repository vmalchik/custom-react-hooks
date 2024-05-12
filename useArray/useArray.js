import { useState, useCallback } from 'react'

// helps avoid boilerplate code
function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)
  // const { array, set, push, remove, filter, update, clear } = useArray([
  //   1, 2, 3, 4, 5, 6
  // ])

  // const set = (newArray) => setArray(newArray)
  const set = useCallback((newArray) => setArray(newArray), [])

  // const push = (value) => setArray(c => c.concat([value]))
  // const push = (value) => setArray(c => [...c, value])
  const push = useCallback((value) => setArray(c => [...c, value]), [])

  // const remove = (index) => setArray(c => {
  //   c.splice(index, 1)
  //   return c.concat([])
  // })

  // const remove = (index) => setArray(c => [
  //   ...c.slice(0, index),
  //   ...c.slice(index + 1)
  // ])

  const remove = useCallback((index) => setArray(c => [
    ...c.slice(0, index),
    ...c.slice(index + 1)
  ]), [])

  // const filter = (func) => setArray(c =>  {
  //   const filtered = c.filter(func)
  //   return filtered
  // })
  // const filter = (func) => setArray(c => c.filter(func))
  const filter = useCallback((func) => setArray(c => c.filter(func)), [])

  // const update = (index, value) => setArray(c =>  { 
  //   c.splice(index, 1, value)
  //   return c.concat([])
  // })
  // const update = (index, value) => setArray(c =>  [
  //   ...c.slice(0, index),
  //   value,
  //   ...c.slice(index + 1, c.length)
  // ])
  const update = useCallback((index, value) => setArray(c =>  [
    ...c.slice(0, index),
    value,
    ...c.slice(index + 1, c.length)
  ]), [])

  // const clear = () => setArray([])
  const clear = useCallback(() => setArray([]), [])

  return { array, set, push, remove, filter, update, clear }
}

export default useArray