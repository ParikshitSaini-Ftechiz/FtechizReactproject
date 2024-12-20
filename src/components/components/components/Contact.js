import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage ,MyTextArea} from "formik";

import * as Yup from "yup";

const Contact = () => {
  const defaultValues = {
    name: "",
    email: "",
    number: "",
    budget: "",
    country: "",
    id: "",
    desc: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(24).required("Please enter your Name"),
    email: Yup.string().email().required("please enter your Email"),
    number: Yup.string().min(10).max(12).required("Please enter your Contact Number"),
    budget: Yup.string().required("Please enter your Budget"),
    country: Yup.string().min(2).max(24).required("Please enter your Country"),
    id: Yup.string()
      .min(1)
      .max(25)
      .required("Please enter your Skype ID/Whatsapp No"),
   desc: Yup.string()
      .min(1)
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <Wrapper>
        <div className="container contact_form">
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="row g-3 ">
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom01" className="form-label">
                    Name
                  </label>
                  <Field
                    type="name"
                    className="form-control"
                    id="validationCustom01"
                    name="name"
                  />
                  <p>
                    <ErrorMessage name="name" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom02" className="form-label">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="validationCustom02"
                    name="email"
                  />
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom01" className="form-label">
                    Contact Number
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    id="validationCustom01"
                    name="number"
                  />
                  <p>
                    <ErrorMessage name="number" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom02" className="form-label">
                    Your Budget
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    name="budget"
                  />
                  <p>
                    <ErrorMessage name="budget" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom02" className="form-label">
                    Country
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    name="country"
                  />
                  <p>
                    <ErrorMessage name="country" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom02" className="form-label">
                    (Skype ID/Whatsapp No)
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    id="validationCustom02"
                    name="id"
                  />
                  <p>
                    <ErrorMessage name="id" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
               <div className="form-outline">
                 <label for="validationCustom02" className="form-label">
                   Project Description
                 </label>
                 <Field as="textarea"
                   type="text"
                   class="form-control"
                   rows="20"
                   column="10"
                   name="desc"
                   id="desc"
                 />
                 <p><ErrorMessage name="desc"/></p>
               </div>
               </div>
              <div className="col-12">
                <NavLink to="">
                  <Button
                    type="submit"
                    className="submit_btn"
                  >
                    Submit
                  </Button>
                </NavLink>
              </div>
            </Form>
          </Formik>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 5rem 0;
  color: ${({ theme }) => theme.colors.color_white};
  font-size: 1.7rem;
  .container {
    padding: 4rem;
  }
  .contact_form {
    background: ${({theme}) => theme.colors.bg};
    border-radius:1rem;
     p{
      color:red;
      font-size: 1.9rem;
     }
    input,
    textarea {
      width: 100%;
      height: 5rem;
      font-size: 1.5rem;
    }

    .submit_btn {
      background: ${({ theme }) => theme.colors.btn_color};
      display: block;
      margin: auto;
      margin-top: 2rem;
      padding: 1rem 6rem;
      color: ${({ theme }) => theme.colors.color_white};
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;
export default Contact;
