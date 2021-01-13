import React, { useState } from 'react';
import { Link } from 'react-router-dom';


async function loginUser(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Registration = (props) => {

    const [name, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState()
    const [role, setRole] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            name,
            password,
            email,
            role
        });
        console.log(response)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Role</p>
                    <input type="text" onChange={e => setRole(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Link to="/">
                <button className="Back">Back</button>
            </Link>
            <div className="Text_main">
                <h2 className="sdp">SOFTVERSKI DIZAJN PROTOKOLA</h2>
                <p className="etf">Faculty of Electrical Engeneering</p>
                <p className="dot">Department of Telecommunications</p>
            </div>
        </div>
    )

}

export default Registration;
