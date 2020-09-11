import React from 'react'
import './error-indicator.css'
const  ErrorIndicator = () => {
  return (
    <div className="error-indicator"> 
      <span className="boom">Boom!</span>
      <span>Somithing went frong</span>
      <span>(we already sent you help!)</span>
    </div>
  )
}
export default  ErrorIndicator;