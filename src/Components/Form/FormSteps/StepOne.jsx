
import React from "react";
import CostumField from "../../CostumField/CostumField";
import { Formik, Form } from "formik";
import "../EmployeesStepsForm";
import * as yup from "yup";
const nameRules = /^[A-Za-zÀ-ÿ\s'-]{1,50}$/;

/*
The first step of the form
*
*
*
*
*
*/
const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values); // we pass the data to the next step
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
        .required("Birth date required")
        .max(
          new Date(Date.now() - 567648000000),
          "You must be at least 18 years"
        ),
      startDate: yup
        .date()
        .max(new Date(), "the date must be prior today ")
        .required("Start Date required"),
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
              <h2> EMPLOYEE'S INFORMATION  </h2>
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
               <div className="label-mobile"><p>Birth date </p></div>
              <CostumField
                label="Birth Date"
                name="birthDate"
                type="date"
                placeholder="Birth date"
                className="input-field"
                errorName="birthDate"
              />
              <div className="label-mobile"><p>Start date</p> </div>
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
  export default StepOne;