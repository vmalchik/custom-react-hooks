import { useEffect, useState, useRef } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

export default function DeepCompareEffectComponent() {

  const [age, setAge] = useState(0)
  const [otherCount, setOtherCount] = useState(0)
  const useEffectCountRef = useRef()
  const useDeepCompareEffectCountRef = useRef()

  // new person variable will be created on each re-render of this function 
  // re-render of this function will occur when age or other count variables are changed
  // Typically you need to wrap this into a useMemo
  // However, if you have a lot of dependencies then it would be easier to wrap them into useDeepCompareEffect
  const person = { 
    age,
    name: "Kyle"
  }

  useEffect(() => {
    useEffectCountRef.current.textContent = parseInt(useEffectCountRef.current.textContent) + 1
  }, [person])

  // will check if object actually changed
  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent = parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
  }, [person])

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>

      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge(current => current + 1)}>Increment Age</button>
      <button onClick={() => setOtherCount(current => current + 1)}>Increment Other Count</button>

    </div>
  )
}