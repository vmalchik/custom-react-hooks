import { useEffect, useState } from 'react'
import useUpdateEffect from './useUpdateEffect';

/**
 * 
 * StrictMode renders components twice (on dev but not production) 
 * in order to detect any problems with your code and warn you about
 * them (which can be quite useful).
 * 
 */

function UpdateEffectComponent() {
  const [count, setCount] = useState(10)
  // console.log('render', Math.random())
  // do not run on initial render
  useUpdateEffect(() => alert(count), [count])
  // useUpdateEffect(() => console.log(count), [count])

  // useEffect(() => console.log('UpdateEffectComponent'), [])

  return (
    <>
      Update Effect Component
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  );
}

export default UpdateEffectComponent;
