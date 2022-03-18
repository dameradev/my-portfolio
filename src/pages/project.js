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
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";

const ProjectStyles = styled.div`
  margin-top: 10rem;
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
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
      height: max-content;
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
    width: 80rem;
    height: 60rem;
    margin: 2rem auto;

    /* ${respondTo.laptopSmall`
    max-width: 50rem;
  `}; */
    ${respondTo.tablet`
      width: 100%;
      height: 30rem;
      margin: 0;
      `}

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
    max-width: 100%;
    margin-top: 12rem;
    text-aling: left;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
    h1 {
      align-self: center;
    }
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
  .bottom-links {
    margin-top: 5rem;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;
  }
`;

const Project = (props) => {
  console.log(data);
  // const id = props.pageContext.id;
  // const project = data.portfolio[id];

  const project = props.data.mdx;
  const {
    title,
    image,
    technologies,
    slideshow,
    testMessage,
    testResult,
    website,
    github,
  } = project.frontmatter;
  const { previous, next } = props.data;
  console.log(project);
  return (
    <>
      <SEO
        title={title}
        // description={description}
        image={image}
      />
      {project && (
        <ProjectStyles>
          <div className="header">
            <h1>{title}</h1>
            <div className="links">
              {website && (
                <a href={website} target="_blank">
                  <img src={ViewWebsiteIcon} />
                  View website
                </a>
              )}
              {github && (
                <a href={github} target="_blank">
                  <img src={GithubIcon} />
                  Open in github
                </a>
              )}
            </div>
          </div>

          {slideshow && (
            <Slideshow className="slideshow" slideshowData={slideshow} />
          )}

          <SectionStyles className="description">
            <MDXRenderer className="">{project.body}</MDXRenderer>
            {/* <h1>Description</h1>
            {description.map((item) => (
              <p>{item}</p>
            ))} */}
          </SectionStyles>
          <SectionStyles>
            <h1>Technologies</h1>

            <TechologiesStyles className="technologies">
              {technologies.map((technology) => (
                <li>{technology}</li>
              ))}
            </TechologiesStyles>
          </SectionStyles>

          {testResult && (
            <>
              <SectionStyles className="testing">
                {!testMessage && testResult ? (
                  <>
                    <h1>Testing</h1>
                    <p>
                      This app was tested for Performance, SEO. Accessibility
                      and Best practices
                    </p>
                    <p>This is the result</p>
                  </>
                ) : (
                  <h1>{testMessage}</h1>
                )}
                <Image src={testResult} />
              </SectionStyles>
            </>
          )}
          <ul className="bottom-links">
            <li>
              {previous && (
                <Link to={`/${previous.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/${next.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </ProjectStyles>
      )}
    </>
  );
};

export const pageQuery = graphql`
  query ProjectBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    previous: mdx(id: { eq: $previousPostId }) {
      slug

      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      slug

      frontmatter {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        technologies
        image
        testMessage
        testResult
        website
        github
        slideshow {
          image
          image_alt
        }
      }
    }
  }
`;

export default Project;
