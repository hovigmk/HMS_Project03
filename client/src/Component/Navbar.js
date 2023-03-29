import React from 'react'

export const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-dark mb-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <h4 class="nav-link text-white p-2" href="#myAlert" data-toggle="collapse" onClick={() => handlePageChange('SignIn')} className={currentPage === 'SignIn' ? ' text-info p-2' : 'text-white p-2'}>SignIn</h4>
                    </li>
                    <li class="nav-item">
                        <h4 class="nav-link text-white p-2" href="" data-target="#myModal" data-toggle="modal" onClick={() => handlePageChange('SignUp')} className={currentPage === 'SignUp' ? ' text-info p-2' : 'text-white p-2'}>SignUp</h4>
                    </li>
                    <li class="nav-item">
                        <h4 class="nav-link text-white p-2" href="#myAlert" data-toggle="collapse" onClick={() => handlePageChange('Dashboard')} className={currentPage === 'Dashboard' ? ' text-info p-2' : 'text-white p-2'}>Dashboard</h4>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar