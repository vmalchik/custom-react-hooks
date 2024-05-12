import { useState, useEffect, useRef, useCallback } from 'react'


function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError()
    setValue()
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() =>  { 
        // console.log('done..') 
        setLoading(false) 
      })
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}

export default useAsync;


// import { useState, useEffect, useRef, useCallback } from 'react'


// function useAsync(operation, dependencies) {
//   const requestId = useRef()
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState()
//   const [value, setValue] = useState()


//   const callbackMemoized = useCallback(() => {
//     if (requestId.current) {
//       console.log('return!', requestId.current)
//       return
//     } 
//     const _requestId = Math.random()
//     requestId.current = _requestId
//     console.log('set requestId.current', requestId.current)
//     setLoading(true)
//     setError()
//     setValue()
//     operation()
//       .then(response => {
//         console.log('done', response)
//         if (requestId.current && requestId.current === _requestId) {
//           setValue(`response ${_requestId}`)
//         }
//       })
//       .catch(e => {
//         console.log('error', e)
//         if (requestId.current && requestId.current === _requestId) {
//           setError(e)
//         }
//       })
//       .finally(() => {
//         if (requestId.current && requestId.current === _requestId) {
//           setLoading(false)
//           requestId.current = null;
//         }
//       })
//     return () => { 
//       console.log('cleanup..')
//       requestId.current = null 
//     } ;
//   }, dependencies)

//   useEffect(() => {
//     callbackMemoized()
//     return () => { 
//       console.log('cleanup..')
//       requestId.current = null 
//     } ;
//   }, [callbackMemoized])

//   return { loading, error, value }
// }

// export default useAsync;
