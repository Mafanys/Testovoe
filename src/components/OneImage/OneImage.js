import React from "react";
import { useNavigate } from "react-router-dom";

const OneImage = ({image}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/image/${image.id}`);

  return(
    
    <img className="photo" src={image.urls.small} onClick={handleClick}/>
  )
}

export default OneImage;