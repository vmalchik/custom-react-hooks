import { useEffect } from 'react'
import useAsync from '../async/useAsync'

const DEFAULT_OPTIONS = {
  headers: {
    "Content-Type": "application/json"
  }
}

// test via console -> network -> throttle 3G
export function useFetch(url, options = {}, dependencies = []) {
    return useAsync(() => {
      return fetch(url, { ...DEFAULT_OPTIONS, ...options })
        .then(res => { 
          if (res.ok) return res.json()
          // by default fetch never fails; so handle failure manually via reject
          return res.json().then(json => Promise.reject(json))
        })
    }, dependencies)

}

export default useFetch