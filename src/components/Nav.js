import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  background: var(--primary);
  position: fixed;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    text-transform: uppercase;
  }
  a {
    color: var(--white);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Logo />
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/pizzas/">My work</Link>
        </li>
        <li>
          <Link to="/slicemasters">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
