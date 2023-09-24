import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);

  const addFormData = (formData) => {
    //console.log("Adding form data:", formData);
    setFormDataArray((prevData) => [...prevData, formData]);//concatenate old data with new ones in an array
     
    
  };
  console.log("new data array after adding:", formDataArray);
  
  return (
    <FormDataContext.Provider value={{ formDataArray, addFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
