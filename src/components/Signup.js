import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [newCredentials, setNewCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({ name: newCredentials.name, email: newCredentials.email, password: newCredentials.password }),
        });
        const json = await response.json();
        // console.log(json);
        // console.log(newCredentials);
        localStorage.getItem('token',json.authtoken);
        if (json.success) {
            navigate('/');
            props.showAlert("Account Created Succesfully",'success')
    
        }
        else{
            props.showAlert(json.error,'danger')
        }
    }
    const onChange = (e) => {
        setNewCredentials({ ...newCredentials, [e.target.name]: e.target.value });
    }


    return (
        <div className='container'>
            <h3>Please fill details for Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={newCredentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={newCredentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={newCredentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={newCredentials.cpassword} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
