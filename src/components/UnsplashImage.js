import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrap from '../img/on-img.png'
import blue from '../img/blue.png'
import Avatar from 'react-avatar';

const Img = styled.img`
  width: 268px;
  height: 268px;
  border-radius: 10px;
  margin-left:21px;
  margin-bottom:71px;
  margin-top:0px;
  `;

export const UnsplashImage = ({ url, profile, nick }) => {
  const [images, setImage] = useState(scrap);
  useEffect(() => {
    if (localStorage.getItem('scrap') != null) {
      if (JSON.parse(localStorage.getItem('scrap')).indexOf(url) != -1) {
        setImage(blue);
      }
    }
  }, [])
  return (
    <>
      <Img src={url} alt="">
      </Img>
      <a onClick={() => {
        if (images == scrap) {
          setImage(blue);

          if (localStorage.getItem('scrap') != null) {
            localStorage.setItem(
              'scrap',
              JSON.stringify(JSON.parse(localStorage.getItem('scrap')) + '||' + url)
            )
          } else {
            localStorage.setItem(
              'scrap',
              JSON.stringify('||' + url)
            )
          }
        }
        else {
          setImage(scrap);
          localStorage.setItem(
            'scrap',
            JSON.stringify(JSON.parse(localStorage.getItem('scrap')).replace('||' + url, ""))
            )
        }
      }} style={{ cursor: "pointer", position: "absolute", width: "30px", height: "30px", marginTop: "228px", marginLeft: "-40px" }}>
        <img style={{ position: "absolute", width: "32px", height: "32px" }} src={images}>
        </img>
      </a>
      <Avatar size="36" style={{ position: "absolute", marginLeft: "-268px", marginTop: "-46px" }} src={profile} ></Avatar>
      <text style={{ fontFamily: "AppleSDGothicNeo-Bold", fontSize: "15px", position: "absolute", marginLeft: "-222px", marginTop: "-36px" }}>{nick}</text>
    </>
  )
}
