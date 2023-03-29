
import React, { useState } from 'react';
import './Dashboard.css';
import QuickTabs from '../../Component/QuickTabs';
import Sidebar from '../../Component/Sidebar';
import Appointment from '../../Component/Appointment';
import Doctors from '../../Component/Doctors';

const Dashboard = () => {

    const [currentPage, setCurrentPage] = useState('Dashboard');

    const renderPage = () => {
        if (currentPage === 'Dashboard') {
            return <QuickTabs />;
        } if (currentPage === 'Appointment') {
            return <Appointment />;
        }
        return <Doctors />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
                <div class="container-fluid" id="main">
                    <div class="row row-offcanvas row-offcanvas-left">
                        <Sidebar currentPage={currentPage} handlePageChange={handlePageChange} />
                        <div className='col main dashMain'>
                            <div class="mt-5" style={{ backgroundColor: "#ffffff" }}>
                                {renderPage()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard