import React from 'react';
import Styled from 'styled-components';

//  context
import AppContext from '../state/AppContext';
import Loading from './Loading';

const Product = ({ match: { params: handle } }) => {
  const [price, setPrice] = React.useState('');
  const [toogle, setToogle] = React.useState(true);
  // /////////////
  const state = React.useContext(AppContext);
  const {
    selectedProd,
    getProduct,
    product,
    loading,
    prodImage,
    shop,
    cartIns,
    checkoutInst,
    updateCart,
    cart,
  } = state;
  const chref = React.useRef();

  React.useEffect(() => {
    if (handle) {
      getProduct(handle.handle);
    }
    checkoutInst();
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    const variant = product.variants.filter((v) => v.id === val);

    selectedProd(variant[0], product.title);
    setPrice(variant[0].price);
  };

  const handleClick = () => {
    updateCart();
    setToogle(false);
  };

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <div>
        <Image src={prodImage} />{' '}
      </div>
      <LeftSection>
        <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
          {product.title}
        </h3>
        {product.variants && (
          <Select id='selectList' onChange={handleChange}>
            <option selected>Choose Variant</option>
            {product.variants.map((v, i) => {
              return <option value={v.id}>{v.title}</option>;
            })}
          </Select>
        )}
        {price && <Price>{`NGN ${price}`}</Price>}
        <p style={{ margin: '10px 0' }}>{product.description}</p>
        <Button onClick={handleClick}>Add to cart</Button>
        <Checkout
          style={toogle ? style : null}
          href={toogle ? null : cartIns.webUrl}
        >
          Checkout
        </Checkout>
      </LeftSection>
    </Wrapper>
  );
};

const style = {
  opacity: '0.4',
};

const Price = Styled.p`
font-size: 25px;
font-weight: 500;
margin: 10px 0;
`;
const Button = Styled.button`
display: block;
background-color: #607d8b;
color: #fff;
width:80%;
 outline: none;
 border: none;
text-align:center ;
justify-content:center ;
padding: 10px 25px;

`;
const Checkout = Styled.a`
display: block;
background-color: transparent;
color: #607d8b;
width:80%;
 border: solid 2px #607d8b;
text-align:center ;
justify-content:center ;
padding: 10px 25px;
margin: 10px 0;
`;

const Wrapper = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 5rem auto ; 
width: 80%;
overflow: hidden;
`;

const Image = Styled.img`
width: 90%;
height: 90%px;
`;

const Select = Styled.select`
width: 100%;
padding: 7px 0;
margin: 5px 0 10px 0;
`;

const LeftSection = Styled.div`

`;
export default Product;
