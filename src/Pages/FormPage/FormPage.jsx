import React, { useEffect } from "react";
import "./FormPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import EmployeesForm from "../../Components/Form/EmployeesForm";
import { useFormData } from "../../context/EmployeeDataProvider";
import AllEmployeesTable from "../../Components/Table/AllEmployeesTable";
function FormPage() {
  const {formDataArray} = useFormData();
  console.log("formDataArray in fomPage:", formDataArray);

  return (
  
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="Create an employee" />
          <EmployeesForm />
        </div>
      </div>
    
  );
}

export default FormPage;
