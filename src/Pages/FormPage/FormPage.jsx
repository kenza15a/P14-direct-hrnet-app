import "./FormPage.scss";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import EmployeesForm from "../../Components/Form/EmployeesForm";
import EmployeesStepsForm from "../../Components/Form/EmployeesStepsForm";
function FormPage() {
  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="main-container">
          <Header title="Let's add an employee" />
          <EmployeesStepsForm />
        </div>
      </div>
    </>
  );
}

export default FormPage;
