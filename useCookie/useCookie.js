import { useEffect, useState, useCallback } from 'react'
import Cookies from 'js-cookie'

function useCookie(name, defaultValue) {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name)
    if (cookie) return cookie

    Cookies.set(name, defaultValue)
    return defaultValue
  })

  const updateCookie = useCallback((newValue, options) => {
    Cookies.set(name, newValue, options)
    setValue(newValue)
  }, [name])

  const remove = useCallback(() => {
    Cookies.remove(name)
  }, [name])



  return [ value, updateCookie, remove ]
}

export default useCookie