import React from "react";
import { Field, ErrorMessage } from "formik";
import './CostumField.scss'

/**
 * A custom field component that we will use in the form component 
 * the fiel can e of any type accepted y formik such as input, text ....
 * @param {
 * } props 
 * @returns  a form field 
 */
function CostumField(props) {
  const { label, name, type, placeholder, className, errorName } = props;
  return (
    <>
      <div className="lab-and-field">
        <label htmlFor={label} aria-labelledby={label}> {label}</label>
        <div className="one-field-groupe">
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
          />
          <ErrorMessage name={errorName} component="div" className="error" />
        </div>
      </div>
    </>
  );
}

export default CostumField;
