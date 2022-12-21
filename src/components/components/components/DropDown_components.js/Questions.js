import React, { useState } from "react";
import { android_ques, blockchain_ques, cloud_ques, flutter_ques, ios_ques, mobile_ques, reactnative_ques, webapp_ques, webdesigning_ques, webdevelopment_ques,hireblockchain_ques,hirejava_ques,hireremote_ques,hiremobile_ques,hirefullstack_ques } from "./Question_Data";
import MyAccordion from "./MyAccordion";

// second dropdown pages data
export const Questions_android = () => {
  const [data, setData] = useState(android_ques);

  return (
    <>
      <section
        className="main-div grid"
        style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
export const Questions_blockchain = () => {
    const [data, setData] = useState(blockchain_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "4rem 10rem", gap: "0" }} >
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
  export const Questions_cloud = () => {
    const [data, setData] = useState(cloud_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_flutter = () => {
    const [data, setData] = useState(flutter_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_ios = () => {
    const [data, setData] = useState(ios_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_mobile = () => {
    const [data, setData] = useState(mobile_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_reactnative = () => {
    const [data, setData] = useState(reactnative_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_webapp = () => {
    const [data, setData] = useState(webapp_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_webdesigning = () => {
    const [data, setData] = useState(webdesigning_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_webdevelopment = () => {
    const [data, setData] = useState(webdevelopment_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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

  // dropDown pages data

  export const Questions_hireblockchain = () => {
    const [data, setData] = useState(hireblockchain_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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

  export const Questions_hirefullstack = () => {
    const [data, setData] = useState(hirefullstack_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_hirejava = () => {
    const [data, setData] = useState(hirejava_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_hiremobile = () => {
    const [data, setData] = useState(hiremobile_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
  export const Questions_hireremote = () => {
    const [data, setData] = useState(hireremote_ques);
  
    return (
      <>
        <section
          className="main-div grid"
          style={{ display: "grid", margin: "2rem 10rem", gap: "0" }} >
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
