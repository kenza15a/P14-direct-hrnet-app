import React, { useState } from "react";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";
import StepThree from "./FormSteps/StepThree";
import { useNavigate } from "react-router-dom";
import EmployeesModal from "../Modal/EmployeesModal";
import Message from "../Message/Message";
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
*
*

*/

//closeParentFunction
function EmployeesStepsForm({ closeParentFunction }) {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("steps form");
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
   closeParentFunction();
   
  };

  const navigate = useNavigate();
  const handleRedirect = () => {
    closeModal();
    navigate("/allEmployees");
  };
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
      openModal={openModal}
    />,
  ];
  return (
    <>
      {steps[currentStep]}

      {isModalOpen && (
        <EmployeesModal
          isOpen={isModalOpen}
          contentComponent={
            <Message messageText={"EMPLOYEE ADDED SUCCESSFULLY 😀 ! "} />
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
}

export default EmployeesStepsForm;
