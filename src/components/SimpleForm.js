import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
// import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const savedValues = {
  name: "Nishant",
  email: "nishantfulara@gmail.com",
  channel: "FitMinds",
  address: "221 Baker Street",
  social: {
    facebook: "nishant",
    instagram: "@i_nish001",
    twitter: "nishantfulara",
  },
  phoneNumbers: ["8368552230", "9899844174"],
  phNumbers: ["8368552230"],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("Data", values);
  onSubmitProps.resetForm();
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  social: Yup.object({
    facebook: Yup.string().required("Required!"),
    instagram: Yup.string().required("Required!"),
    twitter: Yup.string().required("Required!"),
  }),
  phoneNumbers: Yup.array().of(Yup.string().required("Required!")),
  phNumbers: Yup.array().of(Yup.string().required("Required!")),
});
const SimpleForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      <Form>
        <div className="form-control">
          <label>
            Name :
            <Field type="text" id="name" name="name" />
          </label>
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            E-mail :
            <Field type="text" id="email" name="email" />
          </label>
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Channel :
            <Field type="text" id="channel" name="channel" />
          </label>
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control" style={{ height: "auto" }}>
          <label>
            Address :
            <Field
              as="textarea"
              type="text"
              id="address"
              name="address"
              style={{ marginLeft: "20px", height: "69px" }}
            />
          </label>
          <ErrorMessage name="address" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Facebook :
            <Field type="text" name="social.facebook" id="facebook" />
          </label>
          <ErrorMessage name="social.facebook" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Instagram :
            <Field type="text" name="social.instagram" id="instagram" />
          </label>
          <ErrorMessage name="social.instagram" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Twitter :
            <Field type="text" name="social.twitter" id="twitter" />
          </label>
          <ErrorMessage name="social.twitter" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Primary Phone No.
            <Field type="text" name="phoneNumbers[0]" />
          </label>
          <ErrorMessage name="phoneNumbers[0]" component={TextError} />
        </div>
        <div className="form-control">
          <label>
            Secondary Phone No.
            <Field type="text" name="phoneNumbers[1]" />
          </label>
          <ErrorMessage name="phoneNumbers[0]" component={TextError} />
        </div>
        <div className="form-control" style={{ height: "auto" }}>
          <label>
            List Of PhoneNumbers :
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                // console.log("field array props",fieldArrayProps)
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field
                          className="ph-input"
                          name={`phNumbers[${index}]`}
                        />
                        {index === 0 && (
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => push("")}
                          >
                            Add
                          </button>
                        )}
                        {index > 0 && (
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </label>
          <ErrorMessage name="phNumbers" component={TextError} />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setFormValues(savedValues)}
        >
          Load Saved Data
        </button>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SimpleForm;
