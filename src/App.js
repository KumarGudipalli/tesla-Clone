import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/pages/Header';
// import Home from './components/pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Login  from './components/pages/Login';
import Nav from './components/nav';
import Signup from './components/pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import  {login, logout, selectUser}  from './features/cars/UseSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseconfg';
function App() {
  const user = useSelector(selectUser)
  const dispatch =useDispatch()



  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
      // User is signed in
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        })
      )
    } else {
      // User is signed out
      dispatch(logout())
    }
  })
}, [dispatch])


  return (
    <div className="App">
    <BrowserRouter>     

<Routes>
<Route path="/" element = {<Nav/>} />

    <Route path="/Login" element = {<Login/>} />
  <Route path="/Signup" element = {<Signup/>} />
</Routes>
    </BrowserRouter> 

    </div>
  );
}

export default App;
