import React from "react";
import styled from "styled-components";

import respondTo from "../utils/respondTo";

const AboutBlockStyles = styled.div`
  /* div {
    display: flex;
    align-items: center;

    gap: 3rem;
  } */

  background: #f7f7f7;
  padding: 8rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  max-width: 60rem;
  color: var(--black);
  border-bottom: 1rem solid var(--primary);

  ${respondTo.laptopSmall`
    max-width: 50rem;
  `};
  ${respondTo.tablet`
    max-width: 40rem;
  `};
  ${respondTo.tabletMini`
    max-width: unset;
    width: 100vw;
    margin: 0 auto;
  `};
  img {
    width: 10rem;
    height: 10rem;
  }

  h2 {
    position: relative;
    width: max-content;
    font-weight: 400;
    ${respondTo.mobilePortrait`
        font-size: 2.4rem;
    `}
  }

  h2,
  h3 {
    text-transform: uppercase;
    color: var(--primary);
  }
  p,
  li {
    font-weight: 200;
    font-size: 1.6rem;
  }

  .technologies {
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
      height: 28rem;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 2rem;
        font-weight: 400;
      }
      /* justify-content: space-between; */
      ul {
        li {
          text-transform: uppercase;

          &:not(:last-of-type) {
            margin-bottom: 2rem;
          }
        }
      }
      width: 30rem;
      /* text-align: center; */
    }
  }
`;

const AboutBlock = ({ data }) => {
  return (
    <AboutBlockStyles>
      <img src={data.icon} alt="frontend-icon" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="technologies">
        <div>
          <h3>{data.languages.title}</h3>
          <ul>
            {data.languages.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{data.devTools.title}</h3>
          <ul>
            {data.devTools.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </AboutBlockStyles>
  );
};

export default AboutBlock;
