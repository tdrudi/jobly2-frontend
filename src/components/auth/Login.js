import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/login.css";

function Login({ login }) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(formData);
            navigate("/companies");
        } catch (err) {
            console.log(err);
        }
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(data => (
            {
                ...data,
                [name]: value
            }));
    }

    return (
        <div id="login-form-container">
            <form id="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='username'>Username:</label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required />
                <label htmlFor='password'>Password:</label>
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;