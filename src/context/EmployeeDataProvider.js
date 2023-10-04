import React, { createContext, useContext, useState } from "react";
import Employee from "../models/employee";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);

  const addFormData = (formData) => {
    //console.log("Adding form data:", formData);
    //setFormDataArray((prevData) => [...prevData, formData]);//concatenate old data with new ones in an array
    const employee = new Employee(
      formData.firstName,
      formData.lastName,
      formData.birthDate,
      formData.startDate,
      formData.street,
      formData.city,
      formData.zipCode,
      formData.state,
      formData.departement
    );
  console.log(employee)
    setFormDataArray((prevData) => [...prevData, employee]);
    
  };
  console.log("new data array after adding:", formDataArray);
  
  return (
    <FormDataContext.Provider value={{ formDataArray, addFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
