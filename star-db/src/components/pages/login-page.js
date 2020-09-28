import React from 'react'
import { Redirect } from 'react-router-dom'
export default function LoginPage({isLoggedIn, onLogin}) {
  if(isLoggedIn) {
    return <Redirect  to="/" />
  }
  return (
    <div className="jambotron">
        <p>Login secret page!</p>
        <button
         className="btn btn-primary"
         onClick={onLogin}  
        >
          Login
        </button>
    </div>
  )
}
