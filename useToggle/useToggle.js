import { useState, useEffect } from 'react'



function useToggle(initial) {
  const [value, setValue] = useState(initial)

  function toggleValue(value) {
    setValue(currentValue => value === 'boolean' ? value : !currentValue)
  }

  return [value, toggleValue]
}

export default useToggle;
