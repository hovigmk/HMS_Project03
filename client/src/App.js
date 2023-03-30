import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SignIn from './Pages/Signin/Signin';
import SignUp from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh">
      <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<SignIn />}
          />
          <Route
            path="/SignUp"
            element={<SignUp />}
          />
          <Route
            path="/Dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
