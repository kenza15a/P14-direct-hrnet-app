import React from "react";
import CostumField from "../../CostumField/CostumField";
import { Formik, Form } from "formik";
import "../EmployeesFom.scss";
import SelectComponent from "../../SelectComponent/SelectComponent";
import { states } from "../../../data/dataTables";
import * as yup from "yup";
/*

*
*
*
*
*
*

**/
const nameRules = /^[A-Za-zÀ-ÿ\s'-]{1,50}$/;
const streetreg = /\w+(\s\w+){2,}/;
const StepTwo = (props) => {
  const formSchema = yup.object().shape({
    city: yup
      .string()
      .min(3)
      .matches(nameRules, { message: "please insert a correct city" })
      .required("city required"),
    street: yup
      .string()
      .min(10)
      .matches(streetreg, { message: "please insert a correct street" })
      .required(" Street required"),
    zipCode: yup
      .number()
      .positive()
      .integer()
      .min(1)
      .max(999999)
      .required("ZipCode required"),
    state: yup.string().required("State field required "),
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
              <i className="fa fa-chevron-left"></i>
            </button>
            <button type="submit">
              {" "}
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default StepTwo;
