import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login" ,{
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success) {
            //redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Loged In Succesfully",'success')
            history('/');
        }
        else {
            props.showAlert(json.error,'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <div className='container'>
            <h3>Please fill login Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
