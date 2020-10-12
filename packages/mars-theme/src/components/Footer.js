import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import FooterNav from "./FooterNav";

const Footer = ({ state }) => {
  return (
    <>
      <Container>
        <TitleContainer>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        </TitleContainer>
        <NavContainer>
            <FooterNav />
        </NavContainer>
        <SocialContainer>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
          <SocialIcon></SocialIcon>
        </SocialContainer>
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.div`
  width: 848px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  font-family: "montserrat";
  color: #013110;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
 height: auto;
`

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color: #013110;
`

const NavContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
const SocialIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: gray;
  padding: 10px;
  margin: 10px;
`


