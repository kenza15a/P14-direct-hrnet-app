/*import React from "react";
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
*/
import { Formik, Form, Field, ErrorMessage } from "formik";
import './EmployeesFom.scss'
import { formSchema } from "../../schemas";
import SelectComponent from "../SelectComponent/SelectComponent";
import CostumField from "../CostumField/CostumField";
const states = [
  { key: "1", value: "h" },
  { key: "2", value: "b" },
  { key: "3", value: "c" },
  { key: "4", value: "d" },
];
const departements = [
  { key: "1", value: "dev" },
  { key: "2", value: "prod" },
  { key: "3", value: "scrum" },
  { key: "4", value: "rh" },
];
const EmployyesFormComponent = () => {
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    // Manually run validation to get errors
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        // Validation passed, proceed with submission logic
        console.log("Form values:", values);
        alert("information added");
        setSubmitting(false);
      })
      .catch((errors) => {
        // Validation failed, set errors and log them
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
            <div className="fields-groupe">
              <h2>Information section</h2>

              {/**:<CostumField label="FirstName" name="firstName" type="text" placeholder="First Name" className="input-field" errorName="firstName"/> */}
              <div className="lab-and-field">
                <label htmlFor="firstName"> FirstName</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="input-field"
                />

                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="lab-and-field">
                <label htmlFor="lastName">LastName</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="input-field"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="lab-and-field">
                <label htmlFor="birthDate">Birth Date</label>
                <Field
                  type="date"
                  name="birthDate"
                  placeholder="Birth date "
                  className="input-field"
                />
                <ErrorMessage
                  name="birthDate"
                  component="div"
                  className="error"
                />
              </div>
              <div className="lab-and-field">
                <label htmlFor="startDate">Start Date</label>
                <Field
                  type="date"
                  name="startDate"
                  placeholder="Start date "
                  className="input-field"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="fields-groupe">
              <h2>Address section</h2>
              <div className="lab-and-field">
                <label htmlFor="lastName">Street</label>
                <Field
                  type="text"
                  name="street"
                  placeholder="Street"
                  className="input-field"
                />
                <ErrorMessage name="street" component="div" className="error" />
              </div>
              <div className="lab-and-field">
                <label htmlFor="lastName">City</label>
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input-field"
                />
                <ErrorMessage name="city" component="div" className="error" />
              </div>
              <div className="lab-and-field">
                <label htmlFor="lastName">Zip Code</label>
                <Field
                  type="number"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip code"
                  className="input-field"
                />
                <ErrorMessage
                  name="zipCode"
                  component="div"
                  className="error"
                />
              </div>
              <SelectComponent label="States" name="state" options={states} />
            </div>
            <div className="fiels-groupe">
              <h2>Departement</h2>
              <SelectComponent
                label="Departement"
                name="departement"
                options={departements}
              />
            </div>
            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmployyesFormComponent;
