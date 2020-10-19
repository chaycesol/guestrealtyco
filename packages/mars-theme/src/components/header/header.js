import React from "react";
import { connect, styled } from "frontity";
import FontFace from "../styles/fontFace";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import greenLogo from "../../assets/logo/greenLogo.png";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <FontFace />
        <TitleContainer>
        <StyledLink link="/">
        <HeaderLogo><img src={greenLogo} alt="logo"/></HeaderLogo>
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
  align-items: center;
`;

const TitleContainer = styled.div`
 width: 10%;
 height: auto;
 display: flex;
 align-items: baseline;
`

const HeaderLogo = styled.div`
  img{
    height: 90px;
    width: 90px;
  }
  `

const NavContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;
