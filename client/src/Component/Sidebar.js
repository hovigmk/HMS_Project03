import React from "react";

const Sidebar = ({ currentPage, handlePageChange }) => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#3E3680" }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-5 ">
          <h4
            class="nav-link text-white"
            href="#"
            onClick={() => handlePageChange("Dashboard")}
            className={
              currentPage === "Dashboard" ? " text-info" : "text-white"
            }
          >
            <i class="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Dashboard</span>
          </h4>
        </li>
        <li class="nav-item mb-5 ">
          <h4
            class="nav-link text-white"
            href="#"
            onClick={() => handlePageChange("Appointment")}
            className={
              currentPage === "Appointment" ? " text-info" : "text-white"
            }
          >
            <i class="fas fa-tablet-alt font-weight-bold"></i>{" "}
            <span className="ml-3">Appointment</span>
          </h4>
        </li>
        <li class="nav-item mb-5">
          <h4
            class="nav-link text-white"
            href="#"
            onClick={() => handlePageChange("Doctors")}
            className={currentPage === "Doctors" ? " text-info" : "text-white"}
          >
            <i class="fas fa-file-export font-weight-bold"></i>
            <span className="ml-3">Doctors</span>
          </h4>
        </li>
        <li class="nav-item mb-5">
          <h4 class="nav-link text-white" href="#">
            <i class="far fa-chart-bar font-weight-bold"></i>
            <span className="ml-3">Reports</span>
          </h4>
        </li>
        <li class="nav-item mb-5">
          <h4 class="nav-link text-white" href="#">
            <i class="fas fa-atom font-weight-bold"></i>{" "}
            <span className="ml-3">Settings</span>
          </h4>
        </li>
        <li class="nav-item mb-5">
          <h4 class="nav-link text-white" href="#">
            <i class="far fa-folder font-weight-bold"></i>{" "}
            <span className="ml-3">Log Out</span>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
