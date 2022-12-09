import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
const Contact_Page = () => {
  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>Tell Us About Your Project</h1>
            <p>
              Here are the reasons you can depend on Ftechiz Solutions to keep
              you and your business up and running:
            </p>
          </div>
          <div><Contact /></div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 16rem;
    }
  }
`;
export default Contact_Page;

// import React from "react";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
// import { Button } from "./Button";
// import styled from "styled-components";
// import { Formik, useFormik ,Form ,Field} from "formik";
// // import { signUpSchema } from "../../../Schemas/Yup_Contact";
// import * as yup from 'yup';


// const Contact = () => {
//   const defaultValues = {
//     name: "",
//     email: "",
//     contact: "",
//     budget: "",
//     country: "",
//     id: "",
//     desc: "",
//   };
//   const validtaionSchema = yup.object().shape()({
//     name: yup.string().min(4).max(25).required("Please enter your Name"),
//     email: yup.string().email().required("please enter your Email"),
//     contact: yup.string().required("Please enter your Contact Number"),
//     budget: yup.string().required("Please enter your Budget"),
//     country: yup.string().required("Please enter your Country"),
//     id: yup.string().min(1).max(25).required("Please enter your Skype ID/Whatsapp No"),
//     desc: yup.string().required("Please enter your Description"),
// });
  
// const handleSubmit = (values) => {
//   console.log("values", values);
// }
   

//   return (
//     <>
//       <Wrapper>
//         <div className="container" style={{ background: "#101434" }}>
//           <Formik initialValues={defaultValues}
//           validtaionSchema = {validtaionSchema}
//           onSubmit={handleSubmit}
//           >
//           <Form className="row g-3 needs-validation">
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom01" className="form-label">
//                   Name
//                 </label>
//                 <Field
//                   type="name"
//                   className="form-control"
//                   id="validationCustom01"
//                   autocomplete="off"
//                   name="name"
//                   // value={values.name}
//                   // onChange={handleChange}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom02" className="form-label">
//                   Email Address
//                 </label>
//                 <Field
//                   type="email"
//                   className="form-control"
//                   id="validationCustom02"
//                   autocomplete="off"
//                   name="email"
//                   // value={values.email}
//                   // onChange={handleChange}
//                   // onBlur={handleBlur}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom01" className="form-label">
//                   Contact Number
//                 </label>
//                 <Field
//                   type="number"
//                   className="form-control"
//                   id="validationCustom01"
//                   autocomplete="off"
//                   name="contact"
//                   // value={values.contact}
//                   // onChange={handleChange}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom02" className="form-label">
//                   Your Budget
//                 </label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   id="validationCustom02"
//                   autocomplete="off"
//                   name="budget"
//                   // value={values.budget}
//                   // onChange={handleChange}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom02" className="form-label">
//                   Country
//                 </label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   id="validationCustom02"
//                   autocomplete="off"
//                   name="country"
//                   // value={values.country}
//                   // onChange={handleChange}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom02" className="form-label">
//                   (Skype ID/Whatsapp No)
//                 </label>
//                 <Field
//                   type="number"
//                   className="form-control"
//                   id="validationCustom02"
//                   autocomplete="off"
//                   name="id"
//                   // value={values.id}
//                   // onChange={handleChange}
//                 />
               
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="form-outline">
//                 <label for="validationCustom02" className="form-label">
//                   Project Description
//                 </label>
//                 <textarea
//                   type="text"
//                   autocomplete="off"
//                   class="form-control"
//                   rows="5"
//                   name="desc"
//                   id="desc"
//                   // value={values.desc}
//                   // onChange={handleChange}
//                 ></textarea>
               
//               </div>
//             </div>
//             <div className="col-12">
//               <NavLink to="/">
//                 <Button
//                   type="submit"
//                   className="submit_btn"
//                 >
//                   Submit
//                 </Button>
//               </NavLink>
//             </div>
//           </Form>
//           </Formik>
//         </div>
//       </Wrapper>
//     </>
//   );
// };
// const Wrapper = styled.div`
//   padding: 5rem 0;
//   color: ${({ theme }) => theme.colors.color_white};
//   font-size: 1.7rem;
//   .container {
//     padding: 4rem;
//   }
//   input ,
//   textarea{
//     width: 100%;
//     height: 5rem;

//     font-size:1.5rem;
// }
  
//   .submit_btn {
//     background: ${({ theme }) => theme.colors.btn_color};
//     display: block;
//     margin: auto;
//     margin-top:2rem;
//     padding:1rem 6rem;
//     color:${({ theme }) => theme.colors.heading};
//     font-weight:600;
//     font-size:1.5rem;
//   }
// `;
// export default Contact;



          // <Formik initialValues={defaultValues}
          // validationSchema = {validationSchema}
        
          // >
          // <Form className="row g-3 ">
          //   <div className="col-md-12">
          //     <div className="form-outline">
          //       <label for="validationCustom01" className="form-label">
          //         Name
          //       </label>
          //       <Field
          //         type="text"
          //         className="form-control"
          //         id="validationCustom01"
             
          //         name="name"
          //       />
          //      <p >
          //       <ErrorMessage name="name"/>
          //      </p>
          //     </div>
          //   </div>
          //   <div className="col-md-12">
          //     <div className="form-outline">
          //       <label for="validationCustom02" className="form-label">
          //         Email Address
          //       </label>
          //       <Field
          //         type="email"
          //         className="form-control"
          //         id="validationCustom02"
        
          //         name="email"
                 
          //       />
          //       <p style={{color:"red" ,fontSize:"2rem"}}>
          //       <ErrorMessage name="email"/>
          //      </p>
          //     </div>
          //   </div>
  
          //   <div className="col-12">
          //     <NavLink to="/">
          //       <Button
          //         onSubmit={handleSubmit}
          //         type="submit"
          //         className="submit_btn"
          //       >
          //         Submit
          //       </Button>
          //     </NavLink>
          //   </div>
          // </Form>
          // </Formik>