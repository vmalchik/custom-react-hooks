import { useState } from 'react'
import useCopyToClipboard from './useCopyToClipboard';


export default function UseCopyToClipboardComponent() {

  const [copy, { success }] = useCopyToClipboard()

  return (
    <>
      <div>UseCopyToClipboard Component</div>
      <button onClick={() => copy("this was copied")}>
        {success ? 'Copied' : 'Copy Text'}
      </button>
      <input type="text" />
    </>
  );
}