import { useState } from 'react'
import useArray from './useArray';


function ArrayComponent() {

  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6
  ])

  // console.log(array)
  return (
    <>
      <div>Use Array</div>
      
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change 2nd element to 9</button>
      <button onClick={() => remove(array.length - 2)}>Remove 2nd element</button>
      <button onClick={() => filter((n => n < 4))}>Keep numbers less than 4</button>
      <button onClick={() => set([1,2])}>Set [1, 2]</button>
      <button onClick={clear}>Clear</button>
    </>
  );
}

export default ArrayComponent;
