import React, { useEffect, useState } from 'react';
import './main.css';
import Images from '../Images/images';
import usePageDate from '../Custom-hook/usePageDate';

const Photos = () => {

  const images = usePageDate();

  return(
    <div>
      <h2 className='text'>Gallery photos</h2>
      <div className='containerPhotos'>
        {images.length>0&&(<Images images = {images}/>)}
      </div>
    </div>
    
  )
}
export default Photos;