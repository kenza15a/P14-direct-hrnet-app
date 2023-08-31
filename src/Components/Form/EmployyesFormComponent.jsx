import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormComponent.scss";
import { formSchema } from "../../schemas";
import SelectComponent from "../SelectComponent/SelectComponent";
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
        alert("information added")
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
                  <ErrorMessage
                    name="street"
                    component="div"
                    className="error"
                  />
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
              <button className="submit-button" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
     
    </>
  );
};

export default EmployyesFormComponent;
