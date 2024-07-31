import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  height: 200px; /* Adjust the height as needed */
  padding-bottom:40px;
  overflow: hidden; /* Hide the scrollbars */
`;

const NavLinks = styled(animated.ul)`
  list-style-type: none;
  padding: 1rem;
  height: 100%; /* Ensure it takes full height */
  overflow-y: auto; /* Allow vertical scrolling */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  
  & li {
    margin: 0.3rem 0; /* Reduce margin to fit more items */
    position: relative; /* Ensure positioning context for the pseudo-element */
  }

  & button {
    font-size: 1.2rem; /* Slightly smaller font size */
    line-height: 1.5; /* Adjust line height to fit smaller height */
    color: #dfe6e9;
    transition: color 300ms linear 0s;
    text-transform: uppercase;
    border: none; /* Remove default button border */
    background: transparent; /* Remove default button background */
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0;
    text-align: left; /* Align text to the left for better appearance */
    display: inline-block; /* Make button fit its content */
    position: relative; /* Position relative for the pseudo-element */
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0; /* Start with zero width */
      height: 2px; /* Adjust height for the underline effect */
      background-color: #fdcb6e;
      transform-origin: bottom left;
      transition: width 300ms ease; /* Smoothly animate width */
    }

    &:hover {
      color: #fdcb6e;
    }

    &:hover::after {
      width: 100%; /* Expand to the full width of the text */
    }
  }
`;

export default function CollapseMenu({...props}) {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper className={"wrapper"} style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}>
        <NavLinks style={props.linkAnimation}>
          <li><button onClick={props.handleNavbar}>Add a Professor</button></li>
          <li><button onClick={props.handleNavbar}>Professor List</button></li>
          <li><button onClick={props.handleNavbar}>Add a Review</button></li>
          <li><button onClick={props.openModal}>Login</button></li>
          <li><button onClick={props.handleNavbar}>Register</button></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
}
