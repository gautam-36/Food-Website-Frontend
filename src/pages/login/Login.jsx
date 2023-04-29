import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='register'>
            <div className="registerConatainer">
                <div className="logo">Sign In</div>
                <form >
                    <div className="nameInput">
                        <input type="text" placeholder='Enter Username' />
                    </div>
                    <div className="passInput">
                        <input type="password" placeholder='Enter Password' />
                    </div>
                    <button>SIGN In</button>
                </form>
               <Link to = "/register">
                    <p>Don't have an account? Sign Up</p>
               </Link>
            </div>
        </div>
    )
}

export default Login