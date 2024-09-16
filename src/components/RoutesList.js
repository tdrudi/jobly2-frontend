import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Homepage";
import Companies from "./Company/CompaniesList";
import JobList from "./Jobs/JobList";
import Login from "./auth/Login";
import SignUpForm from "./auth/SignUpForm";
import Profile from "./Profile";
import CompanyDetails from "./Company/CompanyDetails";

function RoutesList({ login, signup, isLoggedIn }) {

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {!isLoggedIn &&
                <>
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/signup" element={<SignUpForm signup={signup} />} />
                </>
            }

            {isLoggedIn &&
                <>
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/companies/:handle" element={<CompanyDetails />} />
                    <Route path="/jobs" element={<JobList />} />
                    <Route path="/profile" element={<Profile />} />
                </>
            }
            <Route path="*" element={<Navigate to="/" />} />


        </Routes>
    )
}
export default RoutesList;