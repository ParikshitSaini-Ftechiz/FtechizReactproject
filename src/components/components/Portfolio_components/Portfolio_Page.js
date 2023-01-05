import React, { useState } from "react";
import Image_Card from "./Image_Card";
import Header from "./Header";
import {Portfolio_Data} from "./Portfolio_Data";

const categoryList = [
    ...new Set(Portfolio_Data.map((currentData)=>{
    return currentData.category;
}),

),
"All",

]
console.log(categoryList);

const Portfolio_Page = () => {
  const [menu, setMenu] = useState(Portfolio_Data);
  const [menuList, setMenuList] =useState(categoryList);
  

  const filterItem = (category) => {

    if(category === "All" ){
        setMenu(Portfolio_Data);
        return;
    }
    const updatedList = Portfolio_Data.filter((curretData) => {
      return curretData.category === category;
    
    });
    setMenu(updatedList);
  };
  return (
    <>
     <Header filterItem={filterItem} menuList={menuList}/>

      <Image_Card Menu={menu} />
    </>
  );
};


export default Portfolio_Page;