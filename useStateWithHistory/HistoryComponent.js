import { useState } from 'react'
import useStateWithHistory from './useStateWithHistory'
export default function PreviousComponent() {
  
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1)

  const [name, setName] = useState('Kyle')

  return (
    <div>
      HistoryComponent
      <div>Count: {count}</div>
      <div>History: {history.join(", ")}</div>
      <div>Pointer: {pointer}</div>
      <div>Name: {name}</div>
      <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go to Index 2</button>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  )
}