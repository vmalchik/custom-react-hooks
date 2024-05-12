import { useEffect, useState, useRef, useCallback } from "react";
import useGeolocation from "./useGeolocation";

export default function GeolocationComponent() {
  const { loading, error, data: { latitude, longitude } } = useGeolocation()

  return (
    <div>
      <h1>Geolocation Component</h1>
      <div>Loading: { loading.toString() } </div>
      <div>Error: { error?.message } </div>
      <div>
        {latitude} x {longitude}
      </div>
    </div>
  )
}