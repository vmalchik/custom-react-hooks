import { useState } from 'react'
import useAsync from "./useAsync";

const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      success ? resolve('Success!') : reject('Error!')
    }, 2000)
  })
}

function AsyncComponent() {
  const [count, setCount] = useState(0)
  const { loading, error, value } = useAsync(asyncOperation, [count]);


  return (
    <>
      <div>Async Component</div>
      <div>Loading: { loading.toString() } </div>
      <div>{error}</div>
      <div>{value}</div>
      <button onClick={() => setCount(c => c+1)}>Increase</button>
    </>
  )

}

export default AsyncComponent;
