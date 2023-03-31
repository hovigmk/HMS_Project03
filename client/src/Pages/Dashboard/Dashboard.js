// import React, { useState } from 'react';
// import './Dashboard.css';
// import QuickTabs from '../../Component/QuickTabs';
// import Sidebar from '../../Component/Sidebar';
// import Appointment from '../../Component/Appointment';
// import Doctors from '../../Component/Doctors';

// const Dashboard = () => {

//     const [currentPage, setCurrentPage] = useState('Dashboard');

//     const renderPage = () => {
//         if (currentPage === 'Dashboard') {
//             return <QuickTabs />;
//         } if (currentPage === 'Appointment') {
//             return <Appointment />;
//         }
//         return <Doctors />;
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div class="container-fluid" id="main">
//             <div class="row row-offcanvas row-offcanvas-left">
//                 <div class="container-fluid" id="main">
//                     <div class="row row-offcanvas row-offcanvas-left">
//                         <Sidebar currentPage={currentPage} handlePageChange={handlePageChange} />
//                         <div className='col main dashMain'>
//                             <div class="mt-5" style={{ backgroundColor: "#ffffff" }}>
//                                 {renderPage()}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_DOCTORS } from "../../utils/queries";
import Sidebar from "../../Component/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_DOCTORS, {
    fetchPolicy: "no-cache",
  });

  const doctorList = data?.doctors || [];

  return (
    <main>
      <Sidebar />
      <div className="dashMain">
        <div className="card-header bg-dark text-center">
          <h1>Welcome to HMS!</h1>
        </div>
        <div className="cards">
          <h2>Here is a list of doctors:</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="cardNumber">
              {doctorList.map((doctor) => {
                return (
                  <li key={doctor._id}>
                    <Link to={{ pathname: `/doctor/${doctor._id}` }}></Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
