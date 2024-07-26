import React, { useState } from 'react';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import CollapseMenu from "./CollapseMenu";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import LoginPage from '../Pages/LoginPage';

export default function Navbar(props) {
  const [isModalOpen, setModalOpen] = useState(false);

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

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Add a Professor</a>
            <a href="/">Professor List</a>
            <a href="/new_review">Add a Review</a>
            <a href="#" onClick={openModal}>Login</a>
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
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
          <Button onClick={closeModal}>X</Button>  
          <LoginPage />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

const NavBar = styled(animated.nav)`
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
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
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1050px) {
    display: none;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  position: relative; /* Add this to position the button correctly */
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto; /* Center horizontally */
`;

const Button = styled.button`
  position: absolute; /* Use absolute positioning */
  top: 1rem; /* Adjust top spacing as needed */
  right: 1rem; /* Adjust right spacing as needed */
  border: none;
  padding: 1rem;
  margin-left:400px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #e5a931;
  }
`;

