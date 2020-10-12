import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const FooterNav = ({ state }) => {
      return (
        <NavContainer>
            <LinkContainer>
              <StyledLink link="/">
                Home
              </StyledLink>
              <StyledLink link="/owners">
                For Property Owners
              </StyledLink>
              <FooterLogo></FooterLogo>
              <StyledLink link="/renters">
                For Renters
              </StyledLink>
              <StyledLink link="/renters">
                Blog
              </StyledLink>
            </LinkContainer>
          </NavContainer>
      );
 
};


export default connect(FooterNav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  align-items: center
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const FooterLogo = styled.div`
  background-color: gray;
  height: 75px;
  width: 75px;
`

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20%;
`;