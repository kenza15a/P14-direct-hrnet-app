import { Formik, Form } from "formik";
import "./EmployeesFom.scss";
import { formSchema } from "../../schemas";
import SelectComponent from "../SelectComponent/SelectComponent";
import CostumField from "../CostumField/CostumField";
import { states, departmentsList } from "../../utils/dataTables";
import { useFormData } from "../../context/EmployeeDataProvider";
import { useState } from "react";
import EmployeesModal from "../Modal/EmployeesModal";
import Message from "../Message/Message";
import { useNavigate } from "react-router-dom";
function EmployeesForm() {
  const { formDataArray, addFormData } = useFormData();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
   //managing the state of the modal
   const [isModalOpen, setIsModalOpen] = useState(false);
   const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleRedirect=()=>{
    navigate("/allEmployees");
    closeModal();
  }
  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        addFormData(values); // Add the form data to the array
        resetForm(); // Clear the form fields
        openModal();
        setSubmitting(false);
      
      })
      .catch((errors) => {
        console.log("Validation errors:", errors);
        setErrors(errors);
        setSubmitting(false);
      });

    
  };
  
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthDate: "",
          startDate: "",
          city: "",
          street: "",
          zipCode: "",
          state: "",
          departement: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            {step === 1 && (
            <div className="fields-groupe">
              <h2>EMPLOYEE'S  INFORMATION </h2>

              <CostumField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input-field"
                errorName="firstName"
              />
              <CostumField
                label="last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input-field"
                errorName="lastName"
              />
              <CostumField
                label="Birth date"
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
                placeholder="Start date"
                className="input-field"
                errorName="startDate"
              />
            </div>
            )}
             {step === 2 && (
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
              <SelectComponent label="States" name="state" options={states} />
            </div>
             )}
             {step === 3 && (
            <div className="fiels-groupe">
              <h2>DEPARTMENT</h2>
              <SelectComponent
                label="Departement"
                name="departement"
                options={departmentsList}
              />
            </div>
             )}
            <div className="button-group">
            {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                >
                  <i class="fa fa-chevron-left"></i>
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                >
                <i class="fa fa-chevron-right"></i>
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                >
                  <i class="fa fa-user-plus"></i>
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <EmployeesModal
        isOpen={isModalOpen}  contentComponent={<Message messageText={"EMPLOYEE ADDED SUCCESSFULLY!"} />}
          closeFunction={closeModal} okButtonState={true} buttonFunction={handleRedirect} buttonText={"See All employees"}
        />
      )}
    </>
  );
}

export default EmployeesForm;


/*

code with steps 1
import { Formik, Form } from "formik";
import "./EmployeesFom.scss";
import { formSchema } from "../../schemas";
import SelectComponent from "../SelectComponent/SelectComponent";
import CostumField from "../CostumField/CostumField";
import { states, departmentsList } from "../../utils/dataTables";
import { useFormData } from "../../context/EmployeeDataProvider";
import Message from "../Message/Message";
import EmployeesModal from "../Modal/EmployeesModal";
import { useState } from "react";
import { redirect } from "react-router-dom";
function EmployeesForm() {
  //managing the state of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //managing the steps
  const [currentStep, setCurrentStep] = useState(1);
  //const [currentStepErrors, setCurrentStepErrors] = useState({});
  const [stepErrors, setStepErrors] = useState({});
  const handleNextStep = () => {
    const errorsOnCurrentStep = Object.keys(stepErrors).some(
      (key) => key.startsWith(`step${currentStep}.`)
    );
  
    if (!errorsOnCurrentStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleRedirect = () => {
     redirect('/allEmployees')
  };
  
  const { addFormData } = useFormData();

  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        addFormData(values); // Add the form data to the array
        resetForm(); // Clear the form fields
       openModal();
        setSubmitting(false);
      })
      .catch((errors) => {
        console.log("Validation errors:", errors);
        setErrors(errors);
        setSubmitting(false);
      });
  };
   // Function to handle form validation
   const validateForm = async (values) => {
    try {
      await formSchema.validate(values, { abortEarly: false });
      setStepErrors({}); // Clear errors if validation succeeds
      return {};
    } catch (errors) {
      const errorMap = {};
      errors.inner.forEach((error) => {
        // Include step-specific keys for errors
        errorMap[`step${currentStep}.${error.path}`] = error.message;
      });
      setStepErrors(errorMap); // Set errors for the current step
      return errorMap;
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthDate: "",
          startDate: "",
          city: "",
          street: "",
          zipCode: "",
          state: "",
          departement: "",
        }}
        onSubmit={handleSubmit}
        validate={validateForm} 
        //validationSchema={formSchema}
      >
        {({ isSubmitting, isValidating  }) => (
          <Form>
             {currentStep === 1 && (
            <div className="fields-groupe">
              <h2>EMPLOYEE'S  INFORMATION </h2>

              <CostumField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input-field"
                errorName="firstName"
              />
              <CostumField
                label="last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input-field"
                errorName="lastName"
              />
              <CostumField
                label="Birth date"
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
                placeholder="Start date"
                className="input-field"
                errorName="startDate"
              />
            </div>
             )}
               {currentStep === 2 && (
            <div className="fields-groupe">
           <h2>EMPLOYEE'S  ADDRESS </h2>
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
              <SelectComponent label="States" name="state" options={states} />
            </div>
               )}
                   {currentStep === 3 && (
            <div className="fields-groupe">
              <h2>EMPLOYEE'S DEPARTMENT</h2>
              <SelectComponent
                label="Departement"
                name="departement"
                options={departmentsList}
              />
            </div>
                   )}
           <div className="button-group">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="prev-button"
              >
                Previous
              </button>
            )}
            {currentStep < 3 && (
          <button
          type="button"
          onClick={handleNextStep}
          className="next-button"
         
        >
          Next
        </button>
            )}
           {currentStep === 3 && (
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || isValidating || Object.keys(stepErrors).length > 0}
          >
            Submit
          </button>
        )}
          </div>
          {Object.keys(stepErrors).length > 0 && (
        <div className="error-message">
          {Object.values(stepErrors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <EmployeesModal
        isOpen={isModalOpen}  contentComponent={<Message messageText={"information added"} />}
          closeFunction={closeModal} okButtonState={true} buttonFunction={handleRedirect} buttonText={"see All employees"}
        />
      )}
    </>
  );
}

export default EmployeesForm;

*/
