import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Disclaimer = () => {
  return (
<Wrapper>
  <h1>Disclaimer</h1>
  <h3>Disclaimer</h3>
  <p>If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <NavLink className="link" to="">business@ftechiz.com</NavLink></p>
  <h3>Disclaimers for Ftechiz</h3>
  <p>All the information on this website – <NavLink className="link" to="">https://ftechiz.com/ </NavLink>– is published in good faith and for general information purpose only. Ftechiz does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Ftechiz), is strictly at your own risk. Ftechiz will not be liable for any losses and/or damages in connection with the use of our website.</p>
  <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone ‘bad’.</p>
  <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms that are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their <b>“Terms of Service”</b> before engaging in any business or uploading any information.</p>
  <h3>Consent</h3>
  <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
  <h3>Update</h3>
  <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
</Wrapper>
  )
}
const Wrapper = styled.section `
  padding: 14rem 6rem 0 6rem;
  h1 {
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    margin: 3rem 0;
  }
  h3 {
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 2rem;
    font-weight: 550;
  }
  p {
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 2rem;
    text-align: justify;
  }
 
  .link {
    text-decoration: underline;
    font-weight: 550;
  }
`;
export default Disclaimer