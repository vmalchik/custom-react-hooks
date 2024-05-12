import { useEffect, useState, useRef, useCallback } from "react";
import useSize from "./useSize";

export default function SizeComponent() {
  const ref = useRef()
  const size = useSize(ref)
  return (
    <div>
      <h1>Size Component</h1>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </div>
  )
}