import React, { useState } from "react";
import {
  Tool_Tech_backend,
  Tool_Tech_blockchain,
  Tool_Tech_cloud,
  Tool_Tech_database,
  Tool_Tech_frontend,
  Tool_Tech_mobile,
  Tool_Tech_Programming_Languages,
  Tool_Tech_Toolkit,
  Tool_Tech_Databases,
  Tool_Tech_Frameworks,
  Tool_Tech_SDK,
  Tool_Tech_Programming_Languages_data,
  Tool_Tech_Toolkit_data,
  Tool_Tech_Databases_data,
  Tool_Tech_Frameworks_data,
  Tool_Tech_SDK_data,
} from "./Tool_Tech_Data";
import styled from "styled-components";

export const Tool_Tech_Map_FrontEnd = () => {
  const [image, setImage] = useState(Tool_Tech_frontend);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_BackEnd = () => {
  const [image, setImage] = useState(Tool_Tech_backend);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Blockchain = () => {
  const [image, setImage] = useState(Tool_Tech_blockchain);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Cloud = () => {
  const [image, setImage] = useState(Tool_Tech_cloud);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Database = () => {
  const [image, setImage] = useState(Tool_Tech_database);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Mobile = () => {
  const [image, setImage] = useState(Tool_Tech_mobile);
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {image.map((currentData) => {
            return <img src={currentData.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
//tool tech android//
export const Tool_Tech_Map_Programming_Languages = () => {
  const [image, setImage] = useState(Tool_Tech_Programming_Languages);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="Programming_Languages_images"/>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Toolkit = () => {
  const [image, setImage] = useState(Tool_Tech_Toolkit);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images"/>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Databases = () => {
  const [image, setImage] = useState(Tool_Tech_Databases);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images"/>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Frameworks = () => {
  const [image, setImage] = useState(Tool_Tech_Frameworks);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="frameworks_images"/>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_SDK = () => {
  const [image, setImage] = useState(Tool_Tech_SDK);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images"/>;
          })}
        </div>
      </Wrapper>
    </>
  );
};
//tool tech IOS//
export const Tool_Tech_Map_Programming_Languages_IOS = () => {
  const [image, setImage] = useState(Tool_Tech_Programming_Languages_data);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return (
              <img
                src={currentData.url}
                className="Programming_Languages_images"
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Toolkit_IOS = () => {
  const [image, setImage] = useState(Tool_Tech_Toolkit_data);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images" />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Databases_IOS = () => {
  const [image, setImage] = useState(Tool_Tech_Databases_data);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images" />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_Frameworks_IOS = () => {
  const [image, setImage] = useState(Tool_Tech_Frameworks_data);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="frameworks_images" />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
export const Tool_Tech_Map_SDK_IOS = () => {
  const [image, setImage] = useState(Tool_Tech_SDK_data);
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-column ">
          {image.map((currentData) => {
            return <img src={currentData.url} className="images" />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`

  img {
    width: 8rem;
  }
  .Programming_Languages_images{
    width: 9rem;

  }
  .images{
    width: 11.5rem;
  }
  .frameworks_images{
    width: 10rem;
  }
  .grid {
    display: grid;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    ${'' /* margin: 8rem 0rem; */}
  }
  .grid-four-column {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .grid-three-column  {
    grid-template-columns: .5fr .5fr .5fr ;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    img {
      width: 8rem;
    }
    .grid {
      display: grid;
      gap: 4rem;
      margin: 6rem 0rem;
    }
    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .grid-four-column {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 16rem;
    }
    .Programming_Languages_images {
      width: 14rem;
    }
    .images {
      width: 16.3rem;
    }
    .frameworks_images {
      width: 13rem;
    }
    .grid {
      display: grid;
      gap: 9rem;
      margin: 2rem 0rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    img {
      width: 16rem;
    }
    .Programming_Languages_images {
      width: 12rem;
    }
    .images {
      width: 15rem;
    }
    .frameworks_images {
      width: 12rem;
    }
    .grid {
      display: grid;
      gap: 9rem;
      margin: 6rem 0rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    .grid-three-column {
    grid-template-columns: 1fr;
  }
  }
`;
