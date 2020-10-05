import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <TitleContainer>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        </TitleContainer>
        <NavContainer>
          <MobileMenu />
          <Nav />
        </NavContainer>
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  font-family: "montserrat";
  color: #013110;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const TitleContainer = styled.div`
 width: 25%;
 height: auto;
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color: #013110;
`

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;
