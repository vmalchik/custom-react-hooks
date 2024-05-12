// import { useState } from 'react'
import useToggle from './useToggle'

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
      <button onClick={() => toggleValue('foobar')}>Make Junk</button>
    </>
  );
}

export default ToggleComponent;
