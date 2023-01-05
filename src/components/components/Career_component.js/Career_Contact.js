import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const Career_Contact = () => {
  const defaultValues = {
    name: "",
    email: "",
    number: "",
    technolgy: "",
    country: "",
    id: "",
    desc: "",
    file: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(24).required("Please enter your Name"),
    email: Yup.string().email().required("please enter your Email"),
    number: Yup.string()
      .min(10)
      .max(12)
      .required("Please enter your Contact Number"),
    technolgy: Yup.string().required("Please enter your technolgy"),
    country: Yup.string().min(2).max(24).required("Please enter your Country"),
    id: Yup.string()
      .min(1)
      .max(25)
      .required("Please enter your Skype ID/Whatsapp No"),
    file: Yup.string().required("Please upload your resume"),
    desc: Yup.string().min(1).required("Required"),
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
                    Technolgy
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    name="technolgy"
                  />
                  <p>
                    <ErrorMessage name="technolgy" />
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
                  <label for="formFile" class="form-label">
                    Upload Resume
                  </label>
                  <Field
                    className="form-control file_input"
                    type="file"
                    id="formFile"
                    name="file"
                  />
                  <p>
                    <ErrorMessage name="file" />
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-outline">
                  <label for="validationCustom02" className="form-label">
                    Project Description
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    class="form-control"
                    rows="20"
                    column="10"
                    name="desc"
                    id="desc"
                  />
                  <p>
                    <ErrorMessage name="desc" />
                  </p>
                </div>
              </div>
              <div className="col-12">
                <NavLink to="/">
                  <Button type="submit" className="submit_btn">
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
    background: ${({ theme }) => theme.colors.bg};
    p {
      color: red;
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
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
     .contact_form {
    background: ${({ theme }) => theme.colors.bg};
    p {
      color: red;
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
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding: 1rem 6rem;
      color: ${({ theme }) => theme.colors.color_white};
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }
     .contact_form {
    background: ${({ theme }) => theme.colors.bg};
    p {
      color: red;
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
      margin-bottom: 2rem;
      padding: 1rem 6rem;
      color: ${({ theme }) => theme.colors.color_white};
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 50%;
    }
     .contact_form {
    background: ${({ theme }) => theme.colors.bg};
    p {
      color: red;
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
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding: 1rem 6rem;
      color: ${({ theme }) => theme.colors.color_white};
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
  }
`;
export default Career_Contact;
