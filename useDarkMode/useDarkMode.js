import { useEffect, useState, useCallback } from 'react'
import { useLocalStorage } from '../storage/useStorage'
import useMediaQuery from '../media-query/useMediaQuery'

// https://usehooks.com/useDarkMode/
function useDarkMode() {
  const { value: darkMode, setValue: setDarkMode } = useLocalStorage('dark-mode-enabled')

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled , setDarkMode]
}

export default useDarkMode