import { useEffect, useRef } from "react";

// When to use?
// window resize, key press, mouse moves, mouse hovers
export default function useEventListener(eventType, callback, element = window) {
  // console.log('useEventListener')

  // Option 1
  // const callbackRef = useRef(callback)

  // useEffect(() => {
  //   console.log('set callback...!')
  //   callbackRef.current = callback
  // }, [callback])

  // useEffect(() => {
  //   if (element == null) {
  //     console.log('element is null.. return')
  //     return;
  //   }
  //   // set handler to a function that accepts event and invokes scoped callback with the event
  //   const handler = (e) => callbackRef.current(e)
  //   element.addEventListener(eventType, callbackRef.current)
  //   return () => element.removeEventListener(eventType, handler)
  // }, [element, eventType])

  // Option 2 (relies on useCallback hook)
  // useEffect(() => {
  //   console.log('FOO BAR')
  //   if (element === null) return;
  //   // console.log('set event listener', callback)
  //   element.addEventListener(eventType, callback)
  //   return () => { 
  //     console.log('cleanup!!')
  //     element.removeEventListener(eventType, callback)
  //   }
  // }, [element, eventType, callback])

  // Option 3
  // Create a ref that stores handler
   const callbackRef = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => callbackRef.current(event);
      // Add event listener
      element.addEventListener(callbackRef, eventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(callbackRef, eventListener);
      };
    },
    [callbackRef, element] // Re-run if eventName or element changes
  );
}