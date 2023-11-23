import { Field, ErrorMessage } from "formik";
import React from "react";

function SelectComponent(props) {
  const { label, name, options,defaultValue, ...rest } = props;
  return (
    <>
      <div className="lab-and-field">
        <label htmlFor={name}>{label}</label>
        <Field className="select-field" as="select" id={name} name={name} {...rest}>
        <option value={defaultValue} >{defaultValue}</option>
          {options.map((option) => {
            return (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component="div" className="error" />
      </div>
    </>
  );
}

export default SelectComponent;
