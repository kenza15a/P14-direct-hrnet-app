import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../../schemas";
import DatePicker from "react-datepicker";
import "./FormComponent.scss";
const onSubmit = () => {
  alert("submitted");
};
function FormComponent() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: new Date(),
      startDate: new Date(),
      street: "",
      city: "",

      state: "",
      zipCode: "",
      department: "",
    },
    validationSchema: formSchema,
    onSubmit: onSubmit,
  });
  console.log(values);
  return (
    <>
      <form
        className="employee-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="email">First Name</label>
        <input
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="firstName"
          type="text"
          placeholder="Enter the first name"
          className={errors.firstName && touched.firstName ? "input-error" : ""}
        />
        {errors.firstName && touched.firstName ? (
          <p className="error">{errors.firstName}</p>
        ) : (
          ""
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="lastName"
          type="text"
          placeholder="Enter the last name"
          className={errors.lastName && touched.lastName ? "input-error" : ""}
        />
        {errors.lastName && touched.lastName ? (
          <p className="error">{errors.lastName}</p>
        ) : (
          ""
        )}
        <label htmlFor="birth-date">Birth date</label>
        <DatePicker
          className="date-field"
          selected={values.birthDate}
          onChange={(date) => setFieldValue("birthDate", date)}
          dateFormat="dd/MM/yyyy"
        />
        {errors.birthDate && touched.birthDate ? (
          <p className="error">{errors.birthDate}</p>
        ) : (
          ""
        )}
        <label htmlFor="start-date">Start date</label>
        <DatePicker
          className="date-field"
          selected={values.startDate}
          onChange={(date) => setFieldValue("startDate", date)}
          dateFormat="dd/MM/yyyy"
        />
        {errors.startDate && touched.startDate ? (
          <p className="error">{errors.startDate}</p>
        ) : (
          ""
        )}
        <label htmlFor="street">Street</label>
        <input
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
          id="street"
          type="text"
          placeholder="Enter the street"
          className={errors.street && touched.street ? "input-error" : ""}
        />
        {errors.street && touched.street ? (
          <p className="error">{errors.street}</p>
        ) : (
          ""
        )}
        <label htmlFor="city">City</label>
        <input
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          id="city"
          type="text"
          placeholder="Enter the city"
          className={errors.city && touched.city ? "input-error" : ""}
        />
        {errors.city && touched.city ? (
          <p className="error">{errors.city}</p>
        ) : (
          ""
        )}

        <label htmlFor="zipCode">Zip code</label>
        <input
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          id="zipCode"
          type="number"
          placeholder="Enter your zipCode"
          className={errors.zipCode && touched.zipCode ? "input-error" : ""}
        />
        {errors.zipCode && touched.zipCode ? (
          <p className="error">{errors.zipCode}</p>
        ) : (
          ""
        )}
        <label>select </label>
            <select
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
          id="state"
          type="select"
          placeholder="Enter your zipCode"
          className={errors.zipCode && touched.zipCode ? "input-error" : ""}
        />
        {errors.zipCode && touched.zipCode ? (
          <p className="error">{errors.zipCode}</p>
        ) : (
          ""
        )}
         
        <button type="submit">send</button>
      </form>
    </>
  );
}

export default FormComponent;
