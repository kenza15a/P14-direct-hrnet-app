import * as yup from "yup"
//const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Minimum eight characters, at least one letter and one number
const nameRules = /^[A-Za-zÀ-ÿ-']{1,50}$/
const streetreg = /\w+(\s\w+){2,}/
export const formSchema = yup.object().shape({
    firstName: yup.string().min(5).matches(nameRules, { message: "please insert a correct firstname" }).required("required"),
    lastName: yup.string().min(5).matches(nameRules, { message: "please insert a correct lasName" }).required("required"),
    birthDate: yup.date().required('required').max(new Date(Date.now() - 567648000000), "You must be at least 18 years"),
    startDate: yup.date().max(new Date(), "the date must be prior today ")
        .required('Required'),
    city: yup.string().min(5).matches(nameRules, { message: "please insert a correct city" }).required("required"),
    street: yup.string().min(15).matches(streetreg, { message: "please insert a correct street" }).required("required"),
    zipCode: yup.number().positive().integer().max(100).min(1).required("required"),
    state: yup.string().required('required field'),
    departement: yup.string().required('required field'),

    //  email: yup.string().email("please enter a valid email").required("required"),
    //age: yup.number().positive().integer().required("required"),
    // password: yup.string().min(5).matches(passwordRules, { message: "please insert a stronger password" }).required("required"),
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "passwords must match").required("required")
})