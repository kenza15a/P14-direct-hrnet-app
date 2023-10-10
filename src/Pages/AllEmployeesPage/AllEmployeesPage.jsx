import React from "react";
import "./AllEmployeesPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import AllEmployeesTable from "../../Components/Table/AllEmployeesTable";
import { useState } from "react";
import EmployeesModal from "../../Components/Modal/EmployeesModal";
import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
import Message from "../../Components/Message/Message";
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
            <button className="addEmployees" onClick={openModal}>
              Add new employee
            </button>
          </div>
          {formDataArray.length > 0 ? (
            <AllEmployeesTable data={formDataArray} />
          ) : (
            <div className="error-no-data">
              {" "}
              <Message messageText={"Sorry no data available !"} />
              <p>Click add new employee to start  😃...</p>
            </div>
          )}
          {isModalOpen && (
            <EmployeesModal
              isOpen={isModalOpen}
              contentComponent={<EmployeesStepsForm />}
              closeFunction={closeModal}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
