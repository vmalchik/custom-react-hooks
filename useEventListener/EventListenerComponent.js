import { useEffect, useState, useRef, useCallback } from "react";
import useEventListener from "./useEventListener";

export default function EventListenerComponent() {
  const [key, setKey] = useState('')
  useEventListener('keydown', (e) => setKey(e.key))
  // const callback = useCallback((e) => setKey(e.key), [])
  // useEventListener('keydown', callback)

  return (
    <div>
      <div>Event Listener Component</div>
      <div>Last Key: {key}</div>
    </div>
  )
}