import React from "react";
import styled from "styled-components";
import Image from "../Image";

const PortfolioItemStyles = styled.li`
  padding: 2rem 0;
  width: 100%;
  height: 35rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  background: #000;
  color: #fff;
  opacity: 1;
  transition: all 0.8s;

  .gatsby-image-wrapper {
    height: 100%;
    position: static !important;
    opacity: 0.5;
    z-index: 0;
    transition: all 0.5s;
  }

  &:hover {
    background: var(--primary);
    .gatsby-image-wrapper {
      display: none;
    }
    button {
      opacity: 1;
    }
    .technologies {
      opacity: 1;
    }
    &::before {
      opacity: 0;
    }
  }

  h2 {
    margin-top: 2rem;
    text-transform: capitalize;
    z-index: 100;
    opacity: 1;
    position: relative;
    padding: 0 2rem;
    z-index: 2;
  }
  button {
    opacity: 0;
    background: transparent;
    border: 1px solid var(--secondary);
    box-shadow: none;
    color: var(--secondary);
    font-weight: 100;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    align-self: center;
    margin-top: 3rem;
    z-index: 5;
    cursor: pointer;
    &:hover,
    &:active {
      background: var(--secondary);
      color: var(--white);
    }
  }

  .technologies {
    opacity: 0;
    display: flex;
    flex-wrap: wrap;

    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    margin-top: 2rem;
    li {
      background: var(--black);
      padding: 0.5rem 1rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      margin: 0.5rem;
    }
  }
`;

const PortfolioItem = ({ data }) => {
  console.log(data);
  return (
    <PortfolioItemStyles>
      <h2>{data.title}</h2>
      <Image src={data.image.src} alt={data.image.alt} />
      <ul className="technologies">
        {data.technologies.map((technology) => (
          <li>{technology}</li>
        ))}
      </ul>

      <button onClick={() => console.log("herlo")}>See project</button>
    </PortfolioItemStyles>
  );
};

export default PortfolioItem;
