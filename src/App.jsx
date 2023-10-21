import { useEffect, useReducer } from 'react';
import './App.css'

function App() {
  let handleSubmit = (event) => {
    event.preventDefault()
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){ 
        alert('Hello');
        form.reset()
       }
      console.log(data)
    })
  }
  useEffect( () =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data =>{ 
      console.log(data)
    }
    )
  },[])
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <br></br>
        <input type="text" name="Name" id="name" placeholder='Name' />
        <br></br>
        <label htmlFor="Email">Email</label>
        <br></br>
        <input type="email" name="email" id="email" placeholder='Email' />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
