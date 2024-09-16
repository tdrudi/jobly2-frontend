import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import RoutesList from './components/RoutesList';
import JoblyApi from './api';
import UserContext from './components/auth/UserContext';
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState({
    data: "",
    loadedUser: false,
  });
  const [token, setToken] = useLocalStorage('jobly-token');
  const [appliedIds, setAppliedIds] = useState([]);

  useEffect(() => {
    async function getCurrUser() {
      if (token) {
        let { username } = jwtDecode(token);
        JoblyApi.token = token;
        let user = await JoblyApi.getUser(username);
        if (user) {
          setCurrUser({
            data: user,
            loadedUser: true,
          });
          setIsLoggedIn(true);
        }
        setAppliedIds(user.applications);
      } else {
        setCurrUser({
          data: null,
          loadedUser: true,
        });

      }
    }
    getCurrUser();
  }, [token]);

  function hasApplied(id) {
    if (appliedIds.includes(id))
      return true;
    else
      return false;
  }


  function applyToJob(id) {
    if (!hasApplied(id)) {
      JoblyApi.applyToJob(currUser.data.username, id);
      setAppliedIds([...appliedIds, id]);
    }
  }

  function logout() {
    setAppliedIds([]);
    setCurrUser({
      data: undefined,
      loadedUser: false,
    });
    setToken(null);
    setIsLoggedIn(false);
  }

  async function login(data) {
    let token = await JoblyApi.login(data);
    setToken(token);
  }

  async function signup(data) {
    let token = await JoblyApi.signup(data);
    setToken(token);
  }


  return (
    <UserContext.Provider
      value={{
        currUser: currUser.data,
        setCurrUser,
        hasApplied,
        applyToJob,
      }}>
      < div className="App">
        <BrowserRouter>
          <Navbar logout={logout} isLoggedIn={isLoggedIn} />
          <RoutesList currUser={currUser.data} login={login} signup={signup} isLoggedIn={isLoggedIn} />
        </BrowserRouter>
      </div >
    </UserContext.Provider >
  );
}

export default App;
