import useScript from "./useScript"

export default function ScriptComponent() {
  const { loading, error } = useScript('https://code.jquery.com/jquery-3.6.0.min.js')

  if (loading) { 
    // console.log('loading')
    return <div>Script Component - Loading</div>
  }
  if (error) {
    // console.log('error')
    return <div>Script Component - Error</div>
  }
  return <div>{window.$(window).width()}</div>
}