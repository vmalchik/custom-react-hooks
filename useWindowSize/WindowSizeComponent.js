import { useEffect, useState, useRef, useCallback } from "react";
import useWindowSize from "./useWindowSize";

export default function WindowSizeComponent() {
  const { height, width } = useWindowSize()
  return (
    <div>
      <h1>Window Size Component</h1>
      <div>height: {height}</div>
      <div>width: {width}</div>
    </div>
  )
}