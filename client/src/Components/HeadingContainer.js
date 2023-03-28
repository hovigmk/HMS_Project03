import React, { useState } from 'react';
import Header from './Header/Header';
import Appointment from './Pages/Appointment/Appointment';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';


export default function HeadingContainer() {
    const [currentPage, setCurrentPage] = useState('Appointment');

    const renderPage = () => {
        if (currentPage === 'Appointment') {
            return <Appointment />;
        } if (currentPage === 'Signin') {
            return <Signin />;
        }
        return <Signup />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
