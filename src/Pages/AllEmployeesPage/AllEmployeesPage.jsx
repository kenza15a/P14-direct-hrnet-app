import "./AllEmployeesPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import { useState } from "react";
import EmployeesModal from "../../Components/Modal/EmployeesModal";
import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
import { mockedEmployees } from "../../data/dataTables";
import AllEmployeesTablePaged from "../../Components/Table/AllEmployeesPagedTable";
import ModalComponent from "react-dynamic-modal-lib";
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
  const { emlployeesList } = useFormData();

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
            <button className="addEmployees" onClick={openModal}>
              Add new employee
            </button>
          </div>
          {emlployeesList.length > 0 ? (
            <AllEmployeesTablePaged data={emlployeesList} />
          ) : (
            <div className="mocked-container">
              {/*<div className="error-no-data">
              <Message messageText={"Sorry no data available !"} subMessageText={"Click add new employee to start  😃..."} />
          </div> */}

              <AllEmployeesTablePaged data={mockedEmployees} />
            </div>
          )}
          
          {
            /*isModalOpen && (
            <EmployeesModal
              isOpen={isModalOpen}
              contentComponent={<EmployeesStepsForm closeParentFunction={closeModal} />}
              closeFunction={closeModal}
            />
            )*/
          
            <ModalComponent
              isOpen={isModalOpen}
              contentComponent={
                <EmployeesStepsForm closeParentFunction={closeModal} />
              }
              closeFunction={closeModal}
            />
          }
        </div>
      </div>
    </>
  );
}

export default AllEmployeesPage;
