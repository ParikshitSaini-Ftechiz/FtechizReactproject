import React, { useState } from "react";
import { android_ques } from "./Question_Data";
import MyAccordion from "./MyAccordion";
const Questions = () => {
  const [data, setData] = useState(android_ques);

  return (
    <>
      <section
        className="main-div grid"
        style={{ display: "grid", margin: "2rem 10rem", gap: "0" }}
      >
        <h1 style={{ color: "#231740", textAlign: "center", margin: "5rem 0" }}>
          Frequently Asked Questions (FAQs)
        </h1>
        <div
          className="container"
          style={{ border: "1px solid #ebebed", borderRadius: "1rem" }}
        >
          {data.map((currentData) => {
            const { id } = currentData;
            return (
              <>
                <MyAccordion key={id} {...currentData} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Questions;
