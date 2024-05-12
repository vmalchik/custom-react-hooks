import { useEffect, useState, useRef } from "react";


// Note: const foo = ( [bar] ) => console.log(bar)  // gets first element

// When to use?
// Infinite Scroll
// Lazy loading
export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // foo('hello')
    // console.log(ref.current)
    if (ref.current == null) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(ref.current)
    return () => {
      // console.log('disconnect')
      observer.disconnect()
    }
  }, [ref, rootMargin])

  return isVisible
}