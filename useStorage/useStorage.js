import { useState, useEffect, useRef, useCallback } from 'react'

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storage) {
  const [value, setValue] = useState(() => {
    const jsonValue = storage.getItem(key)

    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    }

    if (typeof defaultValue === 'function') {
      console.log('function')

      return defaultValue()
    } 
    return defaultValue
  })

  useEffect(() => {
    if(value === undefined) {
      return storage.removeItem(key)
    }
    storage.setItem(key, JSON.stringify(value))

  }, [key, value, storage])
 
  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return { value, setValue, remove }
}

export default useStorage;

// Better-ish implementation

// import { useState, useEffect, useRef, useCallback } from 'react'

// function initStore(key, defaultValue) {
//   const current = localStorage.getItem(key)
//   if (current && current !== 'undefined') {
//     return current
//   }
//   if (defaultValue) {
//     localStorage.setItem(key, defaultValue)
//   }
//   return defaultValue
// }

// function useStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     const init = initStore(key, defaultValue)
//     return init;
//   })

//   const set = useCallback((newValue) => {
//     localStorage.setItem(key, newValue)
//     setValue(newValue)
//   }, [key])
 
//   const remove = useCallback(() => {
//     localStorage.removeItem(key)
//     setValue(undefined)
//   }, [key])

//   return { value, set, remove }
// }

// export default useStorage;



// Okay Implementation

// import { useState, useEffect, useRef, useCallback } from 'react'

// function initStore(key, defaultValue) {
//   const current = localStorage.getItem(key)
//   if (current && current !== 'undefined') {
//     return current
//   }
//   if (defaultValue) {
//     localStorage.setItem(key, defaultValue)
//   }
//   return defaultValue
// }

// function useStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     const init = initStore(key, defaultValue)
//     return init;
//   })

//   useEffect(() => {
//     if (value !== undefined) {
//       localStorage.setItem(key, value)
//     } else {
//       localStorage.removeItem(key)
//     }
//   }, [key, value])
 
//   const remove = useCallback(() => {
//     setValue(undefined)
//   }, [])

//   return { value, set: setValue, remove }
// }

// export default useStorage;

