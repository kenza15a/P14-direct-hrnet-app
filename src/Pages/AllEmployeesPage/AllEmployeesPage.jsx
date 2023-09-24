import React from "react";
import "./AllEmployeesPage.css";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import AllEmployeesTable from "../../Components/Table/AllEmployeesTable";
function AllEmployeesPage() {
  const { formDataArray } = useFormData();
  console.log("formDataArray in employeesPage:", formDataArray);

  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="All employees" />
          <AllEmployeesTable data={formDataArray} />
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
