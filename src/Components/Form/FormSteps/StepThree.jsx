import React from "react";
import { Formik, Form } from "formik";
import "../EmployeesFom.scss";
import SelectComponent from "../../SelectComponent/SelectComponent";
import { departmentsList } from "../../../data/dataTables";
import * as yup from "yup";
import { useFormData } from "../../../context/EmployeeDataProvider";


/*

*
*
*
*
*
*

**/

const StepThree = (props) => {
  const { addFormData } = useFormData();

  const formSchema = yup.object().shape({
    departement: yup.string().required("required field"),
  });
  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        addFormData(values); // Add the form data to the array
        // closeModal();
        //open success modal
        props.openModal();
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
                <i className="fa fa-chevron-left"></i>
              </button>
              <button type="submit" className="submit-button">
                <i> Add the employee </i>
                <i className="fa fa-user-plus"></i>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default StepThree;
