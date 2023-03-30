import React, { useState } from "react";
import Header from "./Header/Header";
import Appointment from "./Pages/Appointment/Appointment";
import Signin from "../pages/Login";
import Signup from "../pages/Signup";

export default function HeadingContainer() {
  const [currentPage, setCurrentPage] = useState("Signin");

  const renderPage = () => {
    if (currentPage === "Signin") {
      return <Signin />;
    }
    if (currentPage === "Signin") {
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
