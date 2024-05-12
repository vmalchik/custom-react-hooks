import { useEffect, useState, useCallback } from 'react'

function useEffectOnce(callback) {
  useEffect(() => {
    callback()
  }, [])
}

export default useEffectOnce