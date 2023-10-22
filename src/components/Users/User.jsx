import React from 'react'
import { useLoaderData } from 'react-router-dom'

const User = () => {
    let loadedData = useLoaderData();
    let handleSubmit = event => {
        event.preventDefault();
        let form = event.target;
        let name = form.name.value;
        let email = form.email.value;
        console.log(name, email)
    }
    return (
        <div>
            <h1>this is user: {loadedData.name}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={loadedData?.name} name="name" id="" />
                <br />
                <input type="email" defaultValue={loadedData?.email} name="email" id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default User