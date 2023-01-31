import React,{useState} from 'react'
import { Tool_Tech_backend, Tool_Tech_blockchain, Tool_Tech_cloud,  Tool_Tech_database, Tool_Tech_frontend, Tool_Tech_mobile } from './Tool_Tech_Data';
import styled from "styled-components";


export const Tool_Tech_Map_FrontEnd = () => {
    const [image, setImage] = useState(Tool_Tech_frontend);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url} />
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
export const Tool_Tech_Map_BackEnd = () => {
    const [image, setImage] = useState(Tool_Tech_backend);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url} />
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
export const Tool_Tech_Map_Blockchain = () => {
    const [image, setImage] = useState(Tool_Tech_blockchain);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url} />
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
export const Tool_Tech_Map_Cloud = () => {
    const [image, setImage] = useState(Tool_Tech_cloud);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url} />
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
export const Tool_Tech_Map_Database = () => {
    const [image, setImage] = useState(Tool_Tech_database);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url}/>
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
export const Tool_Tech_Map_Mobile = () => {
    const [image, setImage] = useState(Tool_Tech_mobile);
  return (
  <>      
  <Wrapper>
  <div className="grid grid-four-column">
    {
        image.map((currentData) =>{
            return(
                <img src={currentData.url} />
            )
        })
    }
    </div>
  </Wrapper>
  </>

  )
};
const Wrapper = styled.section`
img{
  width:10rem;
}
.grid-four-column{
  grid-template-columns:1fr 1fr 1fr 1fr;
}
`;