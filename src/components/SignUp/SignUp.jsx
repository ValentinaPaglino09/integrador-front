import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

const handleSubmit = (e) => {

    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value


    fetch('http://localhost:3000/signup', {
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
       .then(json => console.log(json))
}
    
  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'> Email: </label>
        <input id='email' name='email' type='email'></input>

        <label htmlFor='pass'> Password: </label>
        <input id='pass' name='password' type='password'></input>

        <input type='submit'></input>
    </form>
    <p>Already have an account?</p>
    <Link to={'/'}><button>Login</button></Link>
    </>
  )
}

export default SignUp