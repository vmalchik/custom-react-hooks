import { useEffect, useState, useRef, useCallback } from "react";
import useEventListener from "../event-listener/useEventListener";

export default function useWindowSize() {
  // option 1: re-use useEventListener
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // useEventListener('resize', () => setWindowSize({ width: window.innerWidth, height: window.innerHeight }))
  const handler = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])
  useEventListener('resize', handler)


  // option 2: from scratch
  // const [height, setHeight] = useState(window.innerHeight)
  // const [width, setWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   const handler = (e) => { 
  //     setHeight(window.innerHeight)
  //     setWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handler)
  //   return () => {
  //     window.removeEventListener('resize', handler)
  //   }
  // }, [])

  return { height: windowSize.height, width: windowSize.width }
}