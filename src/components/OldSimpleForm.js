import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Data", values);
};
const validationSchema = Yup.object().shape({
  name:Yup.string().required("Required!"),
  email:Yup.string().email("Invalid Email Format!").required("Required!"),
  channel:Yup.string().required("Required!")
})
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
//     errors.email = "Invalid Email Format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };
const OldSimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
  console.log("Visited Fields", formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>
            Name :
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              </label>
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
        </div>
        <div className="form-control">
          <label>
            E-mail :
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
        </div>
        <div className="form-control">
          <label>
            Channel :
            <input
              type="text"
              id="channel"
              name="channel"
              value={formik.values.channel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              </label>
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OldSimpleForm;
