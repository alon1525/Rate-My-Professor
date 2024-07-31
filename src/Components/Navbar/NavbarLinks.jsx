import React from 'react';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";


export default function NavbarLinks(props) {
    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
      });

    return (
    <NavLinks style={linkAnimation}>
      <a href="/">Add a Professor</a>
      <a href="/">Professor List</a>
      <a href="/new_review">Add a Review</a>
      <a href="#" onClick={props.openModal}>
        Login
      </a>
      <a href="/">Register</a>
    </NavLinks>
  );
}
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