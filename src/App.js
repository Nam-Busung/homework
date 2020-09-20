import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ic_check from './img/checked.png';
import ic_uncheck from './img/uncheck.png';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import useStateWithCallback from 'use-state-with-callback';

let i = 1;

const Header = styled.header`
  max-width: 72rem;
  margin: 2rem auto;
  margin-bottom: -17px;
`;

const WrapperImages = styled.section`
  max-width: 75rem;
  margin: 5rem auto;

`;

function App() {
  const [images, setImage] = useState([]);
  const [checker, setChecker] = useState(ic_uncheck);
  const [hasmore,setHasmore] = useState(true);
  const Heading = () => {
    return (
      <Header>
        <a onClick={() => {
          if (checker == ic_uncheck) {

            setChecker(ic_check)
            localStorage.setItem(
              'checker',
              JSON.stringify(ic_check)
            )
            window.location.reload()

          }
          else {
            setChecker(ic_uncheck)
            localStorage.setItem(
              'checker',
              JSON.stringify(ic_uncheck)
            )
            window.location.reload()

          }
        }} >
          <img style={{ marginTop: "-3px", cursor: "pointer", position: "absolute", width: "24px", height: "24px" }} src={checker}>
          </img>
        </a>
        <p style={{ marginLeft: "31px", fontFamily: "AppleSDGothicNeo-Regular", fontSize: "15px" }}>스크랩 한 것만 보기</p>
      </Header>
    )
  }

  useEffect(() => {

    if (localStorage.getItem('checker') != null) {
      setChecker(JSON.parse(localStorage.getItem('checker')));
    } else {
      localStorage.setItem(
        'checker',
        JSON.stringify(ic_uncheck)
      )
    }

    if (JSON.parse(localStorage.getItem('checker')) == ic_uncheck) {
      fetchImages();
    } else {
      scrapFetchImages();
    }


  }, [])

  const scrapFetchImages = () => {
    setHasmore(false);

    let ary = new Array();
    setTimeout(() => {
      for(let k=1; k<6;k++){
        axios
        .get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${k}.json`)
        .then(res => {
          for(let j=0;j<res.data.length; j++){
            if (localStorage.getItem('scrap') != null) {
              if (JSON.parse(localStorage.getItem('scrap')).indexOf(res.data[j].image_url) != -1) {
                ary.push(res.data[j])
                setImage([...images, ...ary]);
              }
            }
          }
        })
      }


    },0)

  }
  const fetchImages = () => {
    // if(i==6)
    //   setHasmore(false);
    setTimeout(() => {

      axios
        .get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${i}.json`)
        .then(res => {
          if(res.data[0]==null){
            setHasmore(false);
          }
          setImage([...images, ...res.data]);          
        })
       

        
      i++;
    }, 1000)

  }

  return (
    <div className="container">
      <Heading />
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          if (JSON.parse(localStorage.getItem('checker')) == ic_uncheck) {
            fetchImages();
          }else {
            scrapFetchImages();
          }
        }
        }
        hasMore={
          hasmore
        }
        loader={<Loader />}
      >
        <WrapperImages>
          {
            images.map(image => (
              <>
                <UnsplashImage url={image.image_url} profile={image.profile_image_url} nick={image.nickname} />
              </>
            ))
          }
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
