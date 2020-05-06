import React from 'react';
import Styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h1>Loading products....</h1>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%)
`;

export default Loading;
