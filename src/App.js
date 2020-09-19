import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading';

import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
let i=0;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
  }

  body {
    font-family: sans-serif;
  }
`;
const WrapperImages = styled.section`
  max-width: 75rem;
  margin: 5rem auto;

`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    
    setTimeout(() => {
      console.log(i);

      axios
        .get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${i}.json`)
        .then(res => {
          setImage([...images, ...res.data]);
      })
    }, 1500);
  
    i++;

  }

  return (

    <div className="container">

      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={i<5}

        loader={<Loader />}
      >
        <WrapperImages>

          {
          images.map(image => (
            <>
            <UnsplashImage url={image.image_url} profile={image.profile_image_url} nick={image.nickname}/>
            </>
          ))
          }
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
