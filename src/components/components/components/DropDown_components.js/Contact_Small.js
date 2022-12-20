import React from "react";
import styled from "styled-components";

const Contact_Small = () => {
    return(
        <>
        <Wrapper>
        <div className="form">
              <h1>Let's Talk</h1>
              <div className="contact_form">
                <div className="contact-form">
                  <form action="" method="POST" className="contact-inputs">
                    <label for="fname">your name </label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="user_name"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <label for="lname">your email</label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      name="user_email"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <br />
                    <label for="lname">Subject</label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      name="subject"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <br />
                    <NavLink to="/">
                      <Button
                        type="submit"
                        value="submit"
                        className="submit_btn"
                      >
                        Submit
                      </Button>
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
        </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
.form {
    h1 {
      margin-top: 4rem;
      text-align: center;
    }
    .contact_form {
      width: auto;
      height: auto;
      background: ${({ theme }) => theme.colors.bg};
      margin: 5rem 4rem 3rem 6rem;
      border-radius: 2rem;
      color: ${({ theme }) => theme.colors.color_white};
      .contact-form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 6rem 0 2rem 0;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          font-size: 1.4rem;
          border-radius: 2rem;
          margin: 5rem 2rem;

          input {
            width: 38rem;
            height: 4rem;
          }
          Button {
            padding: 0.8rem 2rem;
            background: ${({ theme }) => theme.colors.btn_color};
            display: flex;
            margin: auto;
          }
        }
      }
    }
  }
`;