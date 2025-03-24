import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';

const Title = styled.div`

  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: "Orbitron", serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
  z-index: 1;

span {
  color: #ffe81f;
  font-weight: 600;
  font-size: 54px;
  font-family: "Orbitron", serif;
  text-shadow: #090a0f 10px 10px 10px;
}
    
`

export default function MainTitle() {
  const title = useRef(null);

  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['Rule the Galaxy', 'Choose<br>Your Side'],
      typeSpeed: 70,
    });
    return () => {
      title.destroy();
    };
  }, []);

  return (
    <Title className="App">
      <span ref={title} /><br />
    </Title>
  );
}