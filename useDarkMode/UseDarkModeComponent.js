import { useState } from 'react'
import useDarkMode from './useDarkMode';
import './body.css'

export default function UseDarkModeComponent() {

  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <div>UseDarkMode Component</div>
      <button 
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          border: `1px solid ${darkMode ? 'white' : 'black'}`,
          background: 'none',
          color: darkMode ? 'white' : 'black'
        }}
        >
        Toggle Dark Mode
      </button>
    </>
  );
}