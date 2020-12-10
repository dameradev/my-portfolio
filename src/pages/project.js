import React from "react";
import styled from "styled-components";
import { data } from "../utils/data";
import GithubIcon from "../assets/images/github.svg";
import ViewWebsiteIcon from "../assets/images/view-website.svg";
import Slideshow from "../components/Slideshow";
import Image from "../components/Image";

import { SectionStyles } from "../styles/HomePage";
import { TechologiesStyles } from "../components/Portfolio/Item";
import respondTo from "../utils/respondTo";
import SEO from "../components/SEO";

const ProjectStyles = styled.div`
  margin-top: 10rem;
  padding: 2rem 5%;
  .header {
    display: flex;
    justify-content: space-between;
    ${respondTo.tabletMini`
    flex-direction: column;
    `}
    h1 {
      font-weight: 200;
    }
    .links {
      display: flex;
      ${respondTo.mobileSmall`
        flex-direction: column;
      `}
      a {
        cursor: pointer;
        background: var(--secondary);
        color: #fff;
        padding: 1rem 2rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        width: max-content;
        line-height: 1rem;

        img {
          width: 2.5rem;
          margin-right: 1rem;
        }
        &:last-of-type {
          margin-left: 1rem;
          background: var(--primary);
          ${respondTo.mobileSmall`
            margin-left: 0;
            margin-top: 1rem;
        `}
        }
      }
    }
  }
  .slideshow {
    max-width: 80rem;
    max-height: 60rem;
    margin: 2rem auto;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      img {
        object-fit: contain !important;
      }
      margin-bottom: 2rem;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }

  .technologies {
    opacity: 1;
    color: #fff;
  }
  .description {
    p {
      text-align: left;
      font-weight: 200;
      max-width: 100rem;
      padding: 0 2rem;
      margin: 1rem 0;
    }
  }

  .testing {
    font-weight: 200;
    .gatsby-image-wrapper {
      max-height: 65rem;
      width: 60rem;
      max-width: 100%;
    }
  }
`;

const Project = (props) => {
  const id = props.pageContext.id;
  const project = data.portfolio[id];

  return (
    project && (
      <>
        <SEO
          title={project.title}
          description={project.description}
          image={project.slideshow[0].src}
        />
        <ProjectStyles>
          <div className="header">
            <h1>{project.title}</h1>
            <div className="links">
              <a href={project.website} target="_blank">
                <img src={ViewWebsiteIcon} />
                View website
              </a>
              <a href={project.github} target="_blank">
                <img src={GithubIcon} />
                Open in github
              </a>
            </div>
          </div>

          <Slideshow className="slideshow" slideshowData={project.slideshow} />
          <SectionStyles className="description">
            <h1>Description</h1>
            {project.description.map((item) => (
              <p>{item}</p>
            ))}
          </SectionStyles>
          <SectionStyles>
            <h1>Technologies</h1>

            <TechologiesStyles className="technologies">
              {project.technologies.map((technology) => (
                <li>{technology}</li>
              ))}
            </TechologiesStyles>
          </SectionStyles>

          <SectionStyles className="testing">
            <h1>Testing</h1>
            <p>
              This app was tested for Performance, SEO. Accessibility and Best
              practices
            </p>
            <p>This is the result</p>
            <Image src={project.testResult} />
          </SectionStyles>
        </ProjectStyles>
      </>
    )
  );
};

export default Project;
