import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../components/auth/UserContext";
import "../css/home.css";

function Home() {
    const { currUser } = useContext(UserContext);
    return (
        <div id='homepage'>
            {currUser
                ? <h2>Welcome back, {currUser.firstName || currUser.username}!</h2>

                : <p><Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link></p>
            }
        </div>
    );
}

export default Home;