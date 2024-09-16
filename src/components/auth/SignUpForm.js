import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/signUpForm.css";

function SignUpForm({ signup }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        await signup(formData);
        navigate("/companies");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }


    return (
        <div id="signup">
            <form id="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username: </label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <label htmlFor="firstName">First Name: </label>
                <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;