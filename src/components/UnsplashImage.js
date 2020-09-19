import React, { useState } from 'react';
import styled from 'styled-components';
import scrap from '../on-img.png'
import blue from '../blue.png'
import Avatar from 'react-avatar';

const Img = styled.img`
  width: 268px;
  height: 268px;
  border-radius: 10px;
  margin-left:21px;
  margin-bottom:76px;
  `;

export const UnsplashImage = ({ url, profile }) => {
  const [images, setImage] = useState(scrap);

  return (
    <>

      <Img  src={url} alt="" >
        
      </Img>

      <a onClick={() => {
        if (images == scrap)
          setImage(blue)
        else
          setImage(scrap)
      }} style={{ cursor: "pointer", position: "absolute", width: "30px", height: "30px", marginTop: "228px", marginLeft: "-40px" }}>
        <img style={{ position: "absolute", width: "32px", height: "32px" }} src={images}>
        </img>
      </a>
      <Avatar  size="36" style={{position: "absolute",marginLeft:"-268px",marginTop:"-46px"}}  src={profile} />


    </>
  )
}
