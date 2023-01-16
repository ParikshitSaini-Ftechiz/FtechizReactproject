import React,{useState} from 'react'
import { Tool_Tech_Data } from './Tool_Tech_Data';

export const Tool_Tech_Map_FrontEnd = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};
export const Tool_Tech_Map_BackEnd = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};
export const Tool_Tech_Map_Blockchain = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};
export const Tool_Tech_Map_Cloud = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};
export const Tool_Tech_Map_Database = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};
export const Tool_Tech_Map_Mobile = () => {
    const [image, setImage] = useState(Tool_Tech_Data);
  return (
  <>
    {
        image.map((currentData) =>{
            return(
                <div>{currentData.url}</div>
            )
        })
    }
  </>
  )
};