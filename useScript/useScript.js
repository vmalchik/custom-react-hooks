import { useEffect, useState } from "react";
// import useAsync from "../async/useAsync";

// Helpful for Stripe Checkout
// Helpful for Google Analytics
export default function useScript(url) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    setError()
    const script = document.createElement("script")
    script.src = url
    script.async = true

    new Promise((resolve, reject) => {
      script.addEventListener("load", resolve)
      script.addEventListener("error", reject)
      document.body.appendChild(script)
    })
    .catch((e) => setError(e))
    .finally(() => setLoading(false))

    return () => {
      // console.log("Remove script!", script)
      document.body.removeChild(script)
    }
  }, [url])

  return { loading, error }
  // We could use the useAsync hook but it does not perform cleanup leading to increase of script tags in document
  // return useAsync(() => {
  //   console.log('useAsync..', url)
  //   const script = document.createElement("script")
  //   script.src = url
  //   script.async = true

  //   return new Promise((resolve, reject) => {
  //     console.log('...here')
  //     script.addEventListener("load", resolve)
  //     script.addEventListener("error", reject)
  //     document.body.appendChild(script)
  //   }).then()

  // }, [url])

}