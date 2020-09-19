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

let i=1;

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
  max-width: 71rem;
  margin: 5rem auto;
  display: grid;
  grid-gap: 21px;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  grid-auto-rows: 268px;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    console.log("hi");
    
    setTimeout(() => {
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
            <Heading />

      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        pullDownToRefreshThreshold={5}
        hasMore={true}

        loader={<Loader />}
      >
        <WrapperImages>
          {
          images.map(image => (
            <UnsplashImage url={image.image_url} />
          ))
          }
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
