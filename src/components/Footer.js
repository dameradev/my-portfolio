import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background: var(--primary);
  height: 25rem;
  color: var(--white);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  clip-path: polygon(0 0, 100% 10vh, 100% 100%, 0 85vh);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        &copy; Developer Damjan Radev, Designer Nela Nikolovska{" "}
        {new Date().getFullYear()}
      </p>
    </FooterStyles>
  );
}
