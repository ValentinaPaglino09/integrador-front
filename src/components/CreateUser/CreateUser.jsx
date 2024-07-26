import React from 'react'


const SignUp = () => {

const handleSubmit = (e) => {

    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    const role = e.target[2].value

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
        },
        body: JSON.stringify({
            email: email,
            password: password, 
            role: role
        }),
        
       })
       .then(res => res.json())
       .then(json => console.log(json))
}
    
  return (
    <>
    <h1>Create user</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'> Email: </label>
        <input id='email' name='email' type='email'></input>

        <label htmlFor='pass'> Password: </label>
        <input id='pass' name='password' type='password'></input>
        
        <label htmlFor='role'>Role: </label>
        <input type='text' id='role' name='role'></input>

        <input type='submit'></input>
    </form>
    
    </>
  )
}

export default SignUp