import React from "react";
import './Header.css';

function Header({ currentPage, handlePageChange })  {
    return (
        <div>
            <nav>
                <a href="#appointment" onClick={() => handlePageChange('Appointment')} className={currentPage === 'Appointment'} > Appointment </a>
                <a href="#signin" onClick={() => handlePageChange('Signin')} className={currentPage === 'Signin'} > Signin </a>
                <a href="#signup" onClick={() => handlePageChange('Signup')} className={currentPage === 'Signup'} > Signup </a>
            </nav>
        </div>
    )
}

export default Header;