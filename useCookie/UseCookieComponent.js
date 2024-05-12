import { useState } from 'react'
import useCookie from './useCookie'

export default function UseCookieComponent() {

  const [value, update, remove ] = useCookie("name", "John")

  return (
    <>
      <div>UseCookie Component</div>
      <div>{value}</div>
      <button onClick={() => update("sally")}>Change</button>
      <button onClick={remove}>Delete</button>
    </>
  );
}