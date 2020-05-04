import React from 'react';
import Styled from 'styled-components';

const Navbar = ({ info }) => {
  return (
    <NavWrapper>
      <Container>
        <Heading>
          <h1>{info.name}</h1>
        </Heading>
        <Nav>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Collection</ListItem>
            <ListItem>Recent Arrival</ListItem>
          </List>
        </Nav>
      </Container>
    </NavWrapper>
  );
};

const NavWrapper = Styled.div`
width: 100%;
height: 10%;
background: #607d8b;
top: 0;
position: fixed;
z-index:2; 
color: #fff;
padding:  0 0 10px 0;
`;
const Nav = Styled.nav`


`;

const Container = Styled.div`
width: 80%;
overflow: hidden;
margin: auto;
display: flex;
justify-content: space-between;
align-items:center ;
`;

const Heading = Styled.div`
font-size: 20px;
`;

const List = Styled.ul`
list-style: none;
display: flex;

`;

const ListItem = Styled.li`
text-decoration: none;
margin: 0 5px;
`;
export default Navbar;
