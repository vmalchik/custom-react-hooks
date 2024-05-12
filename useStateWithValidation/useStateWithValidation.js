import { useEffect, useState, useRef, useCallback } from "react";

export default function useStateWithValidation(validationFn, initialValue) {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(() => validationFn(initialValue))

  // I think my implementation below is more straightforward
  const onChange = useCallback(nextState => {
    // reason we check if this is a function or not is 
    // because setState can take a function or a value
    const v = typeof nextState === "function" ? nextState(value) : nextState
    setValue(v)
    setIsValid(validationFn(value))
  }, [validationFn, value])

  return [ value, onChange, isValid ]

  // my implementation
  // useEffect(() => {
  //  setIsValid(() => {
  //   return validationFn(value)
  //  })
  // }, [value, validationFn])

  // return [ value, setValue, isValid ]
}