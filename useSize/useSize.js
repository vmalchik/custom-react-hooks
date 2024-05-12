import { useEffect, useState, useRef, useCallback } from "react";
import useEventListener from '../event-listener/useEventListener'

export default function useSize(ref) {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current === null) return
    // console.log("useEffect")
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect))
    observer.observe(ref.current)
    return () => observer.disconnect()
    // note: passing ref as dependency is not necessary
  }, [ref])

  return size;
}