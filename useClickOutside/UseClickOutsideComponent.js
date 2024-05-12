import { useState, useRef, useCallback } from 'react'
import useClickOutside from './useClickOutside';


export default function UseClickOutside() {

  const [open, setOpen] = useState(false)
  // const openRef = useRef(false)
  const modalRef = useRef()
  // console.log('isOpen???', open)

  // const callback = useCallback(() => { 
  //   console.log('open?', openRef.current)
  //   if(openRef.current) {
  //     openRef.current = false
  //   } 
  // }, [])

  // useClickOutside(modalRef, callback)

  useClickOutside(modalRef, () => { 
    console.log('open?', open)
    if(open) {
      setOpen(false)
    } 
  })

  return (
    <>
      <div>UseClickOutside Component</div>
      <button onClick={() => setOpen(true)}>Open: {open.toString()}</button>
      <button onClick={() => setOpen(false)}>Close</button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: 'calc(50%, - 50px)',
          left: 'calc(50% - 50px)'
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}