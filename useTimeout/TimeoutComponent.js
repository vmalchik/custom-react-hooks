import { useState } from 'react'
import useTimeout from "./useTimeout";

// const callback = () => console.log('callback!')

function TimeoutComponent() {
  const [value, setValue] = useState(10)
  const [delay, setDelay] = useState(1000)
  const updateValue = () => {
    setValue(Math.random())
  }
  // const { reset, clear } = useTimeout(updateValue, delay)
  const { reset, clear } = useTimeout(() => {
    // console.log(Math.random())
    return 0
  }, delay)


  return (
    <>
     Timeout Component: {value}
     <button onClick={reset}>Rest</button>
     <button onClick={clear}>Clear</button>
     {/* <button onClick={() => setCallback(() => console.log('new callback', Math.random()))}>New Callback</button>
     <div>Delay: {delay}</div>
     <button onClick={() => setDelay((c) => c + 500)}>Set Delay</button> */}
    </>
  );
}

export default TimeoutComponent;
