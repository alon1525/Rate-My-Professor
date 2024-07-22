import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import CollapseMenu from "./CollapseMenu";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";

export default function Navbar({...props}){
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  
const NavBar = styled(animated.nav)`
position: fixed;
width: 100%;
top: 0;
left: 0;
background: #2d3436;
z-index: 1;
font-size: 1.4rem;
`;

const FlexContainer = styled.div`
max-width: 120rem;
display: flex;
margin: auto;
padding: 0 2rem;;
justify-content: space-between;
height: 5rem;
`;

const NavLinks = styled(animated.ul)`
justify-self: end;
list-style-type: none;
margin: auto 0;
font-size: 17px;

& a {
  color: #dfe6e9;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0 1.5rem;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fdcb6e;
    border-bottom: 1px solid #fdcb6e;
  }

  @media (max-width: 1050px) {
      display: none; /* Hide regular nav links on smaller screens */
    }
`;

const BurgerWrapper = styled.div`
margin: auto 0;

@media (min-width: 1050px) {
  display: none;
}
`;
  
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Add a Professor</a>
            <a href="/">Professor List</a>
            <a href="/new_review">Add a Review</a>
            <a href="/login">Login</a>
            <a href="/">Register</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

