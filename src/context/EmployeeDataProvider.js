import React, { createContext, useContext, useState } from "react";
import Employee from "../models/employee";

/*
*
*
*
*
*
*
*
*/
const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [emlployeesList, setemlployeesList] = useState([]);

  const addFormData = (formData) => {

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
    setemlployeesList((prevData) => [...prevData, employee]);

  };


  return (
    <FormDataContext.Provider value={{ emlployeesList, addFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
