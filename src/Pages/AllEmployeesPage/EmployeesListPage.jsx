
import "./AllEmployeesPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import { useFormData } from "../../context/EmployeeDataProvider";
import { useState } from "react";
import { mockedEmployees } from "../../data/dataTables";
import AllEmployeesTablePaged from "../../Components/Table/AllEmployeesPagedTable";
import Message from "../../Components/Message/Message";
import PopUPComponent from "../../Components/PopupComponent/PopUPComponent";
import FormComponent from "../../Components/Form/FormComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageModal from "../../Components/MessageModal/MessageModal";
/*
*
*
*
*
*
*
*
*/
function EmployeesListPage() {
  const { emlployeesList } = useFormData();
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  
  const [isPopUpOpen,setIsPopUPOpen]=useState(false);
  const onFormSubmitSuccess = () => {
    // Handle the success behavior here, e.g., close the popup
    setIsPopUPOpen(false);
  };

 
  const openPopUp = () => {
    setIsPopUPOpen(true);
   console.log(isPopUpOpen)
  };

  const closePopUp = () => {
    setIsPopUPOpen(false);
   // console.log(isPopUpOpen)
  };
  const openMessageModal = () => {
    setIsMessageOpen(true);
  };

  const closeMessageModal = () => {
    setIsMessageOpen(false);
  };
  
 
  
  const navigate = useNavigate();
  const handleRedirect =  () => {
    closeMessageModal();
    navigate("/allEmployees");   
  };

  return (
    <>
      <div className="app-container">
        <SideNav />
        
        <div className="main-container">
          <Header title="All employees" />
          <div className="tableControls">
            <div className="pagination"></div>
            <button className="addEmployees"  onClick={openPopUp}>
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
            <AllEmployeesTablePaged data={mockedEmployees}/>
          </div>
          )}
            {isPopUpOpen  && (
            <PopUPComponent
            isOpen={isPopUpOpen}
              contentComponent={<FormComponent onFormSubmitSuccess={onFormSubmitSuccess}/>}
              closeFunction={closePopUp}
            />
          )}
           {isMessageOpen  && (
        <MessageModal
          isOpen={isMessageOpen}
          message={
            "EMPLOYEE  SUCCESSFULLY! 😃"
          }
          closeFunction={closeMessageModal}
          buttonFunction={()=>closeMessageModal}
          buttonText={"See All employees"}
        />
      )}
          
        </div>
      </div>
    </>
  );
}

export default EmployeesListPage;
