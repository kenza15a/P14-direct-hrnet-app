import "./FormPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import EmployeesForm from "../../Components/Form/EmployeesForm";
function FormPage() {

  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="Add a new employee"/>
          <EmployeesForm />
        </div>
      </div>
    </>
  );
}

export default FormPage;
