import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.078763705736!2d78.0581474152188!3d30.291819281792982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c315555515%3A0x25553e3289a692dd!2sFtechiz%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1669802354380!5m2!1sen!2sin"
          width="auto"
          height="150"
          style={{ border: 0, borderRadius: "1rem" ,marginTop: "2.4rem"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
