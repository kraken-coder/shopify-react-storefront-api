import React from 'react';
import Styled from 'styled-components';

const Grid = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

const GridWrapper = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;

`;

export default Grid;
