import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {

const [users, setUsers] = useState()
const navigate = useNavigate()

const deleteUser = (e, id) => {
   e.preventDefault()
   fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
    headers: {
        auth: localStorage.getItem('token')
    }
    
})
.then(res => res.json())
.then(data => {
   
    if (data.statusCode == 401) throw new Error('No está autorizado')
    setUsers(data)
})
.catch(error => console.log(error))
}

useEffect( () => {
   fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            auth: localStorage.getItem('token')
        }
    })
  .then(res => res.json())
  .then(data => setUsers(data))
   
}, [])
console.log(users);
 if (users) return (
    <>
    <button onClick={(e) => {
        e.preventDefault()
        navigate('/createUser')
    }}>Crear nuevo Usuario</button>
    <div>{users.map(user => (
        <div key={user.id} id={user.id} style={{border: 'solid 1px black', borderRadius: '5px', margin: '5px', padding: '10px'} }> 
            <p>{user.id}</p>
            <p>{user.email}</p>
            <button onClick={(e) => deleteUser(e, user.id)}>Eliminar</button>
        </div>
    ))}</div>
    </>
  )
}

export default Users