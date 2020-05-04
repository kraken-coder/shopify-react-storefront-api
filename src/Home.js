import React from 'react';
import Styled from 'styled-components';

import Product from './Products';
import GridWrapper from './Grid';
import Navbar from './Navbar';

const Home = ({ client }) => {
  const [prods, setProds] = React.useState([]);
  const [shop, setShop] = React.useState('');

  const fetchProd = async (clt) => {
    const req = await clt.product.fetchAll();
    const shop = await clt.shop.fetchInfo();
    setProds(req);
    setShop(shop);
    console.log(shop);

    // const productsQuery = clt.graphQLClient.query((root) => {
    //   root.addConnection('products', { args: { first: 15 } }, (product) => {
    //     product.add('title');
    //     product.add('description');
    //     product.add('images');
    //   });
    // });

    // // Call the send method with the custom products query
    // clt.graphQLClient.send(productsQuery).then(({ model, data }) => {
    //   // Do something with the products
    //   console.log(model);
    //   console.log(data);
    // });
  };

  React.useEffect(() => {
    fetchProd(client);
  }, []);

  return (
    <>
      <Navbar info={shop} />
      <Wrapper>
        <GridWrapper>
          {prods.map((prod) => {
            return <Product prod={prod} />;
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
