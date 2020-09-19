import React, {useState} from 'react';
import styled from 'styled-components';
import ic_check from '../img/checked.png';
import ic_uncheck from '../img/uncheck.png';

const Header = styled.header`
  max-width: 72rem;
  margin: 2rem auto;
  margin-bottom: -17px;
`;



// const Input = styled.input`
//   height: 2.5rem;
//   width: 20rem;
//   margin-top: 1em;
//   outline: none;
//   text-indent: 1em;
//   font-size: 1em;

//   ::placeholder {
//     font-size: .8em;
//   }
// `;

// const Button = styled.button`
//   height: 2.5rem;
//   padding: 0 1em;
//   outline: none;
//   cursor: pointer;
//   background: #222;
//   border: none;
//   color: #fff;
//   font-size: 1em;
// `;

export const Heading = () => {
  const [images, setImage] = useState(ic_uncheck);

  return (
    <Header>
      <a onClick={() => {
        if (images == ic_uncheck)
          setImage(ic_check)
        else
          setImage(ic_uncheck)
      }} >
        <img style={{marginTop:"-3px", cursor: "pointer", position: "absolute", width: "24px", height: "24px"}} src={images}>
        </img>
      </a>
      <p style={{ marginLeft:"31px",fontFamily:"AppleSDGothicNeo-Regular",fontSize:"15px"}}>스크랩 한 것만 보기</p>
      {/* <form>
        <Input type="text" placeholder="Search photos" />
        <Button>Search</Button>
      </form> */}
    </Header>
  )
}
