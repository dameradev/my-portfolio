import React from "react";
import styled from "styled-components";

import LinkedIn from "../assets/images/linkedin-icon.svg";
import Twitter from "../assets/images/twitter.svg";
import respondTo from "../utils/respondTo";

const FooterStyles = styled.footer`
  padding: 0 5%;
  height: 35rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: var(--primary);
  color: var(--white);
  clip-path: polygon(0 0, 100% 10vh, 100% 100%, 0 85vh);

  ${respondTo.tablet`
    height: 50rem;
    flex-direction: column;
  `}
  address {
    font-style: normal;

    ${respondTo.tablet`
    margin-top:10rem;
  `}
    p:last-of-type {
      margin-bottom: 0.5rem;
    }
    span {
      margin-right: 1rem;
    }
    .email {
      font-size: 1.4rem;
    }
  }
  a {
    color: var(--white);
  }

  .social-links {
    a {
      display: flex;
      align-items: center;

      font-size: 1.4rem;
      font-style: italic;
      &:not(:last-of-type) {
        margin-bottom: 0.5rem;
      }
      img {
        width: 4rem;
        height: 4rem;
        &.linkedin {
          width: 4rem;
          height: 3rem;
        }
        margin-right: 1rem;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <address>
        <p>
          <span>Developer</span>
          <a href="mailto:radevdevelopment@gmail.com">
            Damjan Radev{" "}
            <span className="email">radevdevelopment@gmail.com</span>
          </a>
        </p>
        <p>
          <span>Designer</span>
          <a href="mailto:nela.nikolovska1@gmail.com">
            Nela Nikolovska{" "}
            <span className="email">nela.nikolovska1@gmail.com</span>
          </a>
        </p>
        <p>
          <span>Phone</span>
          <a href="tel:+38669652555">+386-69-652-555 (Slovenia)</a>
        </p>
      </address>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/damjan-radev-628120145/">
          <img src={LinkedIn} className="linkedin" /> LinkedIn
        </a>
        <a href="https://twitter.com/dameradev">
          <img src={Twitter} /> @dameradev
        </a>
      </div>
    </FooterStyles>
  );
}
