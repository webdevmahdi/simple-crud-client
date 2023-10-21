import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    let users = useLoaderData();
    let handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('User data has been deleted')
            }
            console.log(data)
        })
    }
  return (
    <div>
        {users.length}
        {
            users.map(user => <div key={user._id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>)
        }
    </div>
  )
}

export default Users