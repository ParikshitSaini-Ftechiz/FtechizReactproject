import React,{useState} from 'react';
import emailjs from '@emailjs/browser';

const Testing = () =>{
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_c3d3g6w', e.target, 'dhnlpBz9g1Zxt4e0I')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  
    
 
    
  
  return (
  <>
        {/* contact form  */}
        <div className="form">
              <h1>Let's Talk</h1>
              <div className="contact_form">
                <div className="contact-form">
                  <form action="" method="POST" className="contact-inputs" onSubmit={sendEmail}>
                    <label for="fname">your name </label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autocomplete="off"
                      required
                   
                    />
                    <br />
                    <label for="email">your email</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      autocomplete="off"
                      required
                    
                    />
                    <br />
                    <br />
                    <label for="subject">your subject</label>
                    <br />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      autocomplete="off"
                      required
                    
                    />
                    <br />
                    <br />
                    <label for="lname">your description</label>
                    <br />
                    <input
                      type="text"
                      id="description"
                      name="message"
                      autocomplete="off"
                      required
                    
                    />
                    <br />
                    <br />
               
                      <button
                        type="submit"
                        value="submit"
                        className="submit_btn"
                      >
                        Submit
                      </button>
                 
                  </form>
                </div>
              </div>
            </div>
  </>
  )
}

export default Testing




// import React,{useState} from 'react';

// const Testing = () => {
//     const [formState, setFormState] = useState({});
//     const changeHandler = (event) => {
//       setFormState({ ...formState, [event.target.name]: event.target.value });
//     };
//     const submitHandler = (event) => {
//       event.preventDefault();
//       const config = {
//         Username: "kajal.kushwaha@ftechiz.com",
//         Password: "DA98EBA8D6B1B22F898DE095C1D5EC2BD38F",
//         Host: "smtp.elasticemail.com",
//         Port: "2525",
//         To: "kajal.kushwaha@ftechiz.com",
//         From: formState.email,
//         Subject: "Testing",                                                                                                                  
//         Body: "Successfully send an email yup",
//       };
//       if (window.Email) {
//         window.Email.send(config).then(
//           () => alert("Email send successfully"));
//       }
//     };
  
//   return (
//   <>
//         {/* contact form  */}
//         <div className="form">
//               <h1>Let's Talk</h1>
//               <div className="contact_form">
//                 <div className="contact-form">
//                   <form action="" method="POST" className="contact-inputs" onSubmit={submitHandler}>
//                     <label for="fname">your name </label>
//                     <br />
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       autocomplete="off"
//                       required
//                       onChange={changeHandler}
//                     value={formState.name || ""}
//                     />
//                     <br />
//                     <label for="lname">your email</label>
//                     <br />
//                     <input
//                       type="text"
//                       id="email"
//                       name="email"
//                       autocomplete="off"
//                       required
//                       onChange={changeHandler}
//                     value={formState.email || ""}
//                     />
//                     <br />
                   
//                     <br />
               
//                       <button
//                         type="submit"
//                         value="submit"
//                         className="submit_btn"
//                       >
//                         Submit
//                       </button>
                 
//                   </form>
//                 </div>
//               </div>
//             </div>
//   </>
//   )
// }

// export default Testing