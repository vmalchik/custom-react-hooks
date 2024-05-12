import { useEffect, useState, useRef, useCallback } from "react";
import useStateWithValidation from "./useStateWithValidation";

export default function StateWithValidationComponent() {
  const [ username, setUsername, isValid ] = useStateWithValidation(name => name.length > 5, "default value")

  return (
    <div>
      <h1>StateWithValidation Component</h1>
      <div>Valid: {isValid.toString() }</div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </div>
  )
}