import "./FormPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
import { useState } from "react";
/*
*
*
*
*
*
*
*
*
*
*/

function FormPage() {
  

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
          <div className="header-container">   <Header title="ADD AN EMPLOYEE" /></div>
         <div className="form-container">   <EmployeesStepsForm closeParentFunction={closeModal}/></div>
       
        </div>
     
      </div>
    </>
  );
}

export default FormPage;
