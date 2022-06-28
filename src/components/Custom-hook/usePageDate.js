import { useEffect, useState } from "react";

const usePageDate = () => {
  const [images, setImage] = useState([]);
  useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=Cz8YWNR9nl2iOFQBFhh4ORWM3ipDRyFeay3XyzGFVXk")
      .then((resp) => resp.json())    
      .then(item => setImage(item))   
  }, []);

  return images
}

export default usePageDate;