import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


export const LogIn = () => {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState ("")
    const  navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'email@email.com' && password === 'password123'){
            localStorage.setItem('email', email);
            navigate('/dashboard')
        } else {
            alert ('Incorrect password or email.')
        }
        console.log('Email:', email);
        console.log('Contraseña', password);
    }

    return (
        <div>
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail}/>
          </div>
          <div>
            <input type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
}