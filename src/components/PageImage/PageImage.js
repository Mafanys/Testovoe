import React from "react";
import { useParams } from "react-router-dom";
import usePageDate from "../Custom-hook/usePageDate";

const PageImage = () => {
  const params = useParams();
  


  const images = usePageDate();

  return(
    images?.map((image)=>{
      if(image.id == params.id){
        return <img src={image.urls.regular} key={image.id}/>
      }
    })
  )
}

export default PageImage;