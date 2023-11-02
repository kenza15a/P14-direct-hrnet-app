import "./FormPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";

import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
import { useState } from "react";

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
          <Header title="Let's add an employee" />
          <EmployeesStepsForm closeParentFunction={closeModal}/>
        </div>
     
      </div>
    </>
  );
}

export default FormPage;
