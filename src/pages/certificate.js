import React from "react";
import ConditionalLayout from "../components/ConditionalLayout";
import advancedReact from "../assets/images/advanced-react.webp";
import masterGatsby from "../assets/images/master-gatsby.webp";
import nodeJs from "../assets/images/node-js.webp";
import react from "../assets/images/react.webp";
import css from "../assets/images/css.webp";
import styled from "styled-components";

import Image from "../components/Image";

const CertificateStyles = styled.div`
  img {
    height: 50%;
    object-fit: contain;
    width: 100%;
  }
`;

const certificate = ({ location: { state } }) => {
  let img = null;
  switch (state?.certificate) {
    case "advanced-react":
      img = advancedReact;
      break;
    case "css":
      img = css;
      break;
    case "master-gatsby":
      img = masterGatsby;
      break;
    case "node-js":
      img = nodeJs;
      break;
    case "react":
      img = react;
      break;
  }
  return (
    <ConditionalLayout>
      <CertificateStyles>
        <Image src={`${state.certificate}.png`} />
      </CertificateStyles>
    </ConditionalLayout>
  );
};

export default certificate;
