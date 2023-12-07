
import "./AllEmployeesPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import { useState } from "react";
import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
import { mockedEmployees } from "../../data/dataTables";
import AllEmployeesTablePaged from "../../Components/Table/AllEmployeesPagedTable";
import  ModalComponent  from "dynamic-modal-library";
import 'dynamic-modal-library/dist/index.css'

/*
*
*
*
*
*
*
*
*/
function AllEmployeesPage() {
  const { employeesList } = useFormData();

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
          <Header title="EMPLOYEES  &nbsp;  LIST" />
          <div className="tableControls">
            <div className="pagination"></div>
            <button className="addEmployees"  onClick={openModal}>
              Add new employee
            </button>
          </div>
          <div className="table-content">
         
         {employeesList.length > 0 ? (
           <AllEmployeesTablePaged data={employeesList} />
         ) : (
           <div className="mocked-container">
             {/*<div className="error-no-data">
             <Message messageText={"Sorry no data available !"} subMessageText={"Click add new employee to start  😃..."} />
         </div> */}

             <AllEmployeesTablePaged data={mockedEmployees} />
           </div>
         )}

         </div>
       
          {isModalOpen && (
            <ModalComponent
              isOpen={isModalOpen}
              contentComponent={
                <EmployeesStepsForm closeParentFunction={closeModal} />
              }
              closeFunction={closeModal}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
