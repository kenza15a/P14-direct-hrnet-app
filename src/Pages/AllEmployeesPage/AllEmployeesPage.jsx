import React from "react";
import "./AllEmployeesPage.css";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
function AllEmployeesPage() {
  return (
    <>
       <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="All employees" />
         
         
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
