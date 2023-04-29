import React, { useState } from 'react'
import "./register.scss"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/api/auth/register", {
                username: username,
                email: email,
                password: password,
            })
            navigate("/login")
        } catch (err) {
            alert("Something went wrong")
            console.log(err)
        }

    }
    return (
        <div className='register'>
            <div className="registerConatainer">
                <div className="logo">Sign Up</div>
                <form onSubmit={handleSubmit} >
                    <div className="nameInput">
                        <input type="text" placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="emailInput">
                        <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="passInput">
                        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button>SIGN UP</button>
                </form>
                <Link to="/login">
                    <p>Already have an account? Sign in</p>
                </Link>
            </div>
        </div>
    )
}

export default Register