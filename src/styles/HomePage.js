import styled from "styled-components";
import heroBack from "../assets/images/background.svg";
import respondTo from "../utils/respondTo";

export const HeroStyles = styled.div`
  background: white url(${heroBack});
  /* background: beige; */
  height: 100vh;

  width: 100%;
  background-size: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85vh);

  display: flex;
  align-items: center;
  padding: 0 5%;

  ${respondTo.tabletMini`
      text-align: center;
    `}
  .text {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-weight: 100;
  }
  .subtitle {
    text-transform: uppercase;
    font-size: 9rem;
    font-weight: 100;
    text-shadow: 0px 10px 10px #00000029;
    text-align: inherit;
    ${respondTo.laptopSmall`
        font-size: 7rem;    
      `}
    ${respondTo.mobileSmall`
        font-size: 5rem;    
      `}
  }
  .title {
    font-size: 5rem;
    font-weight: 100;
    margin-bottom: 2.8rem;
    text-align: left;

    ${respondTo.laptopSmall`
        font-size: 4rem;    
      `}

    ${respondTo.tabletMini`
        text-align: center;
        &::before {
          display: none;
        }
      `}
      
      ${respondTo.mobileSmall`
        font-size: 3rem;    
      `}

      &::before {
      content: "-";
      padding-right: 10rem;
      color: var(--secondary);
    }
  }
  .caption {
    font-size: 2.4rem;
    font-weight: 100;
    line-height: 3.2rem;

    ${respondTo.laptopSmall`
        font-size: 2rem;    
      `}
    ${respondTo.mobilePortrait`
        font-size: 1.6rem;    
      `}
  }

  button {
    ${respondTo.tabletMini`
        align-self: center;
      `}
  }
`;

export const SectionStyles = styled.section`
  margin-top: 8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: uppercase;
    margin-bottom: 8rem;
    width: fit-content;
    font-weight: 100;
    &::after {
      content: "";
      margin-top: 2rem;
      width: 5rem;
      height: 0.7rem;
      position: absolute;
      display: block;
      background: var(--secondary);
    }
  }

  &.about {
    width: max-content;
    margin: 0 auto;

    h1 {
      margin-bottom: 15rem;
      ${respondTo.tabletMini`
        margin-bottom: 8rem;
      `}
    }

    .about__blocks {
      display: flex;
      gap: 2rem;
      width: 100%;
      ${respondTo.tabletMini`
        flex-direction: column;
      `}
    }
  }

  &.portfolio {
    .portfolio__list {
      width: 70vw;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));

      ${respondTo.laptop`
        width: 90vw;
      `}

      ${respondTo.tablet`
        width: 70vw;
        grid-template-columns: 1fr;
      `}
       ${respondTo.mobileSmall`
        width: 100vw;
       `}
    }
  }

  &.testamonials {
    display: flex;
    flex-direction: column;
    .testamonial {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 60%;
      gap: 5rem;
      div {
        width: 10rem;
      }
      .img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;

        background: #3a3a3a;
      }
    }
  }

  &.certificates {
    margin-bottom: 5rem;
    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      li {
        font-weight: 100;
        /* transition: all 0.3s; */
        cursor: pointer;
        a {
          transition: all 0.3s;
          &:hover {
            color: var(--secondary);
          }
        }
      }
      /* height: 300rem; */
    }
  }
`;

export const AboutStyles = styled.div``;
