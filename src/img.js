import React from 'react';
import Styled from 'styled-components';

const Img = ({ images, alt }) => {
  return <Image src={images[0].src} alt={alt} />;
};

const Image = Styled.img`
width: 90%;
height: 90%px;
`;
export default Img;
