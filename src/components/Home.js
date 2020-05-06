import React from 'react';
import Styled from 'styled-components';

import Product from './Products';
import GridWrapper from './Grid';
import Navbar from './Navbar';
import Loading from './Loading';
// context
import AppContext from '../state/AppContext';

const Home = ({ client }) => {
  const state = React.useContext(AppContext);
  const { products, loading } = state;

  if (loading) return <Loading />;
  else
    return (
      <>
        <Wrapper>
          <GridWrapper>
            {products.map((prod) => {
              return <Product client={client} prod={prod} key={prod.id} />;
            })}
          </GridWrapper>
        </Wrapper>
      </>
    );
};

const Wrapper = Styled.div`
max-width: 85%;
margin: auto;
margin-top: 50px ;

`;

export default Home;
