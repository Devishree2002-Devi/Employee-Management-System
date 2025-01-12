import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const onlogin = (e) => {
        e.preventDefault(); // Prevent page refresh on form submission
        sessionStorage.setItem("email", email.current.value);
        sessionStorage.setItem("password", password.current.value);  
        Swal.fire('Congrats', 'Logged in successfully', 'success'); 
        navigate('/');
    }

    return (
        <>
            <div className="login-container">
                <form className="login-form">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" ref={password} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onlogin}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;
