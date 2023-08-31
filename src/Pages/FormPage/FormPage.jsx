import React from "react";
import "./FormPage.css";
import SideNav from "../../Components/SideNav/SideNav";
import FormComponent from "../../Components/Form/FormComponent";
import Header from "../../Components/Header/Header";
import EmployeeFormComponent from "../../Components/Form/EmployyesFormComponent";

function FormPage() {
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="Create an employee" />
          <EmployeeFormComponent />
        </div>
      </div>
    </>
  );
}

export default FormPage;
