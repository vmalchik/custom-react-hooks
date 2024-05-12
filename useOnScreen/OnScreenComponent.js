import { useEffect, useState, useRef, useCallback } from "react";
import useOnScreen from "./useOnScreen";

export default function OnScreenComponent() {
  const headerRef = useRef()
  const visible = useOnScreen(headerRef, "-50px") // do something when x pixels above the screen

  return (
    <div>
      <h1>On Screen Component</h1>
      {new Array(100).fill(0).map((e, i) => <div key={i}>{e}</div>)}
      <h1 ref={headerRef}>Header 2 {visible && "visible"}</h1>
    </div>
  )
}