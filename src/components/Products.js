import React from 'react';
import { Link } from 'react-router-dom';
import Img from './img';

import Styled from 'styled-components';

const Product = ({ prod }) => {
  const { title, description, images, handle, id } = prod;
  return (
    <Card>
      <Img images={images} alt={title} />
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      <Link to={`/product/${handle}`}>
        <Button>View</Button>
      </Link>
    </Card>
  );
};

const Title = Styled.h1`
font-size: 25px;
font-weight: 300;
text-align: left;
margin: 10px 0;
`;
const Desc = Styled.p`
font-size: 18px;
font-weight: 200;

`;

const Card = Styled.div`
margin: 10px;
height: 400px;
position: relative;
`;

const Button = Styled.div`
display: block;
background-color: #607d8b;
color: #fff;
width:80%;
 
text-align:center ;
justify-content:center ;
padding: 10px 25px;
position: absolute;
bottom:0 ;

`;

export default Product;
