import { useEffect, useState } from "react";

const usePageDate = () => {
  const [images, SetImage] = useState([]);
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=Cz8YWNR9nl2iOFQBFhh4ORWM3ipDRyFeay3XyzGFVXk")
      .then((resp) => resp.json())    
      .then(item => SetImage(item))   
  }, []);

  return images
}

export default usePageDate;