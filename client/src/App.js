import React, { useState } from 'react';
import './App.css';
import SignIn from './Pages/Signin/Signin';
import SignUp from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Component/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('SignIn');

  const renderPage = () => {
    if (currentPage === 'SignIn') {
      return <SignIn />;
    } if (currentPage === 'SignUp') {
      return <SignUp />;
    }
    return <Dashboard />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
