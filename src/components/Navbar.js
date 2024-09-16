import React from 'react';
import { Link } from 'react-router-dom';
import "../css/nav.css";

//Only allow users to see profile if logged in, 


function Navbar({ logout, isLoggedIn }) {
    return (
        <div id='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                {isLoggedIn
                    ? <>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/companies">Companies</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/" onClick={logout}>Log Out</Link></li>
                    </>
                    : <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                }
            </ul>
        </div>
    );
}

export default Navbar;