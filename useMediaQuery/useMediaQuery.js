import { useEffect, useState, useRef, useCallback } from "react";
import useEventListener from "../event-listener/useEventListener";

// Can't write media query styles inside JSX --> Must use CSS
// This hook will help create styles using JS code based on scree-size changes
export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)

  useEffect(() => {
    // list is MediaQueryList -> https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
    const list = window.matchMedia(mediaQuery)
    console.log('useMediaQuery', 'useEffect', list)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])

  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

  return isMatch;
}