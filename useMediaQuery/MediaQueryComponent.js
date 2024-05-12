import { useEffect, useState, useRef, useCallback } from "react";
import useMediaQuery from "./useMediaQuery";

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 600px)")

  return (
    <div>
      <h1>Media Query Component</h1>
      <div>Large: {isLarge.toString()}</div>
    </div>
  )
}