import { useState, useCallback } from 'react'
import useDebounce from './useDebounce';

function DebounceComponent() {


  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const notify = useCallback(() => console.log(value), [value])
  const log = () => console.log(value)

  useDebounce(log, 1000, [value])

 
  return (
    <>
      Debounce Component: { value }
      <input type='text' value={value} onChange={handleChange}/>
      <button onClick={notify}>Notify</button>
    </>
  );
}

export default DebounceComponent;
