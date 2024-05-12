import { useEffect, useRef } from "react";
import lodash from 'lodash'

// can check that dependencies actually changed
export default function useDeepCompareEffect(callback, dependencies) {

  const currentDependenciesRef = useRef()

  if (!lodash.isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  useEffect(callback, [currentDependenciesRef.current])

}