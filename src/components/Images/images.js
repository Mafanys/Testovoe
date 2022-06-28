import React from "react";
import OneImage from "../OneImage/OneImage";

const Images = ({images}) => {
  console.log(images);
  return(
    images.map((image)=>(
      <OneImage key={image.id} image = {image}/>
    ))
  )
}

export default Images;