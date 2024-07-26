import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

const handleSubmit = (e) => {
   e.preventDefault()
   const email = e.target[0].value
   const password = e.target[1].value
   
   

   fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password
    }),
    
   })
   .then(res => res.json())
   .then(json => {console.log(json)
    localStorage.setItem('token', json.token)
    navigate('/users')
   } )
}

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} method='post'>
        <label htmlFor='email'> Email: </label>
        <input id='email' name='email' type='email'></input>

        <label htmlFor='pass'> Password: </label>
        <input id='pass' name='password' type='password'></input>

        <input type='submit' ></input>
    </form>
    <p>Don't have an account?</p>
    <Link to={'/signup'}><button>Sign Up</button></Link>
    </>
  )
}

export default Login