import { useState } from 'react'
import useEffectOnce from './useEffectOnce';


function UseEffectOnceComponent() {

  const [count, setCount] = useState(0)

  useEffectOnce(() => alert("hi from use effect once"))
  // console.log(array)
  return (
    <>
      <div>UseEffectOnce Component</div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}

export default UseEffectOnceComponent;
