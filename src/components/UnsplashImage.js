import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 268px;
  height: 268px;
  border-radius: 10px;
  `;

export const UnsplashImage = ({ url, key }) => {
  return (
    <>
      <Img  key={key} src={url} alt="" />
    </>
  )
}
