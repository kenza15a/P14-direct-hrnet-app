import React, { useState } from "react";
import CostumField from "../CostumField/CostumField";
import { Formik, Form } from "formik";
import "./EmployeesFom.scss";
import SelectComponent from "../SelectComponent/SelectComponent";
import { departmentsList, states } from "../../data/dataTables";
import * as yup from "yup";
import { useFormData } from "../../context/EmployeeDataProvider";
import EmployeesModal from "../Modal/EmployeesModal";
import Message from "../Message/Message";
import { useNavigate } from "react-router-dom";
const nameRules = /^[A-Za-zÀ-ÿ\s'-]{1,50}$/;
const streetreg = /\w+(\s\w+){2,}/;

function EmployeesStepsForm() {
  //data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    city: "",
    street: "",
    zipCode: "",
    state: "",
    departement: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const handleResetToStepOne = () => {
    setData({
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      city: "",
      street: "",
      zipCode: "",
      state: "",
      departement: "",
    });
    setCurrentStep(0);
  };
  const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };
  const handelPrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handelPrevStep} data={data} />,
    <StepThree
      prev={handelPrevStep}
      data={data}
      handleResetSteps={handleResetToStepOne}
    />,
  ];
  return <>{steps[currentStep]}</>;
}

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const formSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3)
      .matches(nameRules, { message: "please insert a correct firstname" })
      .required("firstname is required"),
    lastName: yup
      .string()
      .min(3)
      .matches(nameRules, { message: "please insert a correct lasName" })
      .required("lastname is required"),
    birthDate: yup
      .date()
      .required("required")
      .max(
        new Date(Date.now() - 567648000000),
        "You must be at least 18 years"
      ),
    startDate: yup
      .date()
      .max(new Date(), "the date must be prior today ")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {() => (
        <Form>
          <div className="fields-groupe">
            <h2> EMPLOYEE'S INFORMATION </h2>

            <CostumField
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input-field"
              errorName="firstName"
            />
            <CostumField
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input-field"
              errorName="lastName"
            />
            <CostumField
              label="Birth Date"
              name="birthDate"
              type="date"
              placeholder="Birth date"
              className="input-field"
              errorName="birthDate"
            />
            <CostumField
              label="Start date"
              name="startDate"
              type="date"
              placeholder="Start Date"
              className="input-field"
              errorName="startDate"
            />
          </div>
          <div className="button-group">
            <button className="next-button" type="submit">
              {" "}
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
const StepTwo = (props) => {
  const formSchema = yup.object().shape({
    city: yup
      .string()
      .min(3)
      .matches(nameRules, { message: "please insert a correct city" })
      .required("required"),
    street: yup
      .string()
      .min(10)
      .matches(streetreg, { message: "please insert a correct street" })
      .required("required"),
    zipCode: yup
      .number()
      .positive()
      .integer()
      .min(1)
      .max(999999)
      .required("required"),
    state: yup.string().required("required field"),
  });
  const handleSubmit = (values) => {
    props.next(values);
  };
  const handelPrev = (values) => {
    props.prev(values);
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {() => (
        <Form>
          <div className="fields-groupe">
            <h2>ADDRESS</h2>
            <CostumField
              label=" Street"
              name="street"
              type="text"
              placeholder=" Street"
              className="input-field"
              errorName="street"
            />
            <CostumField
              label=" City"
              name="city"
              type="text"
              placeholder=" City"
              className="input-field"
              errorName="city"
            />
            <CostumField
              label=" zipCode"
              name="zipCode"
              type="number"
              placeholder=" zipCode"
              className="input-field"
              errorName="zipCode"
            />
            <SelectComponent
              label="States"
              name="state"
              options={states}
              defaultValue={"Choose a state"}
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={handelPrev}>
              <i class="fa fa-chevron-left"></i>
            </button>
            <button type="submit">
              {" "}
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
const StepThree = (props) => {
  const { emlployeesList, addFormData } = useFormData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("steps form");
    console.log(isModalOpen);
  };

  const closeModal = () => {
   
    setIsModalOpen(!isModalOpen);
    console.log("steps form");
    console.log(isModalOpen);
  };

  const navigate = useNavigate();
  const handleRedirect = () => {
    closeModal();
    navigate("/allEmployees");
  };

  const formSchema = yup.object().shape({
    departement: yup.string().required("required field"),
  });
  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        addFormData(values); // Add the form data to the array
      closeModal();
        //open success modal
        openModal();
        resetForm();
        // resetSteps();
        setSubmitting(false);
      })
      .catch((errors) => {
        console.log("Validation errors:", errors);
        setErrors(errors);
        setSubmitting(false);
      });
  };
  const resetSteps = () => {
    props.handleResetSteps();
  };
  const handelPrev = (values) => {
    props.prev(values);
  };

  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {() => (
          <Form>
            <div className="fiels-groupe">
              <h2>DEPARTMENT</h2>
              <SelectComponent
                label="Departement"
                name="departement"
                options={departmentsList}
                defaultValue={"Choose a department"}
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={handelPrev}>
                <i class="fa fa-chevron-left"></i>
              </button>
              <button type="submit" className="submit-button">
                <i> Add the employee </i>
                <i class="fa fa-user-plus"></i>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <EmployeesModal
          isOpen={isModalOpen}
          contentComponent={
            <Message messageText={"EMPLOYEE ADDED SUCCESSFULLY!"} />
          }
          closeFunction={() => {
            closeModal();
          }}
          okButtonState={true}
          buttonFunction={handleRedirect}
          buttonText={"See All employees"}
        />
      )}
    </>
  );
};
export default EmployeesStepsForm;
