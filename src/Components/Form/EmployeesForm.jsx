import { Formik, Form } from "formik";
import "./EmployeesFom.scss";
import { formSchema } from "../../schemas";
import SelectComponent from "../SelectComponent/SelectComponent";
import CostumField from "../CostumField/CostumField";
import { states, departmentsList } from "../../utils/dataTables";
import { useFormData } from "../../context/EmployeeDataProvider";
function EmployeesForm() {
  const { formDataArray, addFormData } = useFormData();
 
  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
    formSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        addFormData(values); // Add the form data to the array
       // resetForm(); // Clear the form fields
        setSubmitting(false);
      })
      .catch((errors) => {
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

              <CostumField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input-field"
                errorName="firstName"
              />
              <CostumField
                label="last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input-field"
                errorName="lastName"
              />
              <CostumField
                label="Birth date"
                name="birthDate"
                type="date"
                placeholder="Birth date"
                className="input-field"
                errorName="birthDate"
              />
              <CostumField
                label="Start date"
                name="startDate"
                type="date"
                placeholder="Start date"
                className="input-field"
                errorName="startDate"
              />
            </div>
            <div className="fields-groupe">
              <h2>Address section</h2>
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
              <SelectComponent label="States" name="state" options={states} />
            </div>
            <div className="fiels-groupe">
              <h2>Departement</h2>
              <SelectComponent
                label="Departement"
                name="departement"
                options={departmentsList}
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
}

export default EmployeesForm;
