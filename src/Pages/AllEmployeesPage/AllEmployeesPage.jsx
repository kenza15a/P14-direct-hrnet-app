import React from "react";
import "./AllEmployeesPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import AllEmployeesTable from "../../Components/Table/AllEmployeesTable";
import { useState } from "react";
import EmployeesForm from "../../Components/Form/EmployeesForm";
import EmployeesModal from "../../Components/Modal/EmployeesModal";
import AllEmployeesPagedTable from "../../Components/Table/AllEmployeesPagedTable";
function AllEmployeesPage() {
  const { formDataArray } = useFormData();
  console.log("formDataArray in employeesPage:", formDataArray);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="All employees" />
          <div className="tableControls">
          <div className="pagination"></div>
          <button className="addEmployees" onClick={openModal}>Add new employee</button>
          </div>
          <AllEmployeesTable data={formDataArray} />
          {isModalOpen && (
            <EmployeesModal isOpen={isModalOpen} contentComponent={<EmployeesForm/>} closeFunction={closeModal}/>
      )}
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
