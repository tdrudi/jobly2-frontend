import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../components/auth/UserContext";
import "../css/profile.css";

function Profile() {
    const { currUser, setCurrUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: currUser.username,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email,
    });

    async function handleSubmit(e) {
        e.preventDefault();
        let username = formData.username;
        let updateUser = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        };

        let update = await JoblyApi.updateProfile(username, updateUser);

        setFormData(d => ({ ...d }));
        setCurrUser(currUser => ({
            ...currUser,
            data: update,
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(d => ({
            ...d,
            [name]: value,
        }));
    }

    return (
        <div id="profile">
            <form id="profile-form" onSubmit={handleSubmit}>
                <h1>Profile</h1>
                <label htmlFor="username">Username: </label>
                <input
                    name="username"
                    value={formData.username}
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
                <button onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

export default Profile;