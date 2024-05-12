import { useState, useEffect, useRef, useCallback } from 'react'
import useStorage, { useLocalStorage, useSessionStorage } from './useStorage'

function StorageComponent() {
  // const { value: name, set: setName, remove: removeName } = useStorage('name2')
  // const { value: age, set: setAge, remove: removeAge } = useStorage('age2')
  const { value: name, setValue: setName, remove: removeName } = useLocalStorage('name2')
  const { value: age, setValue: setAge, remove: removeAge } = useSessionStorage('age2', () => 1)
  return (
    <>
      <div>Use Storage Component</div>
      <div>{name} - {age}</div>
      <button onClick={() => {
        console.log('click...')
        setName('Kyle')
      }}>Set Name</button>
      <button onClick={() => setAge(21)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  )

}

export default StorageComponent;
