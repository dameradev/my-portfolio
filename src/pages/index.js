import React, { useRef } from "react";

import { Link } from "gatsby-plugin-modal-routing";

import AboutBlock from "../components/AboutBlock";
import PortfolioItem from "../components/Portfolio/Item";
import SEO from "../components/SEO";
import Image from "../components/Image";
import SkyLight from "react-skylight";
import { HeroStyles, SectionStyles } from "../styles/HomePage";
import { data as recivedData } from "../utils/data";
import { graphql } from "gatsby";

const HomePage = ({ data }) => {
  const frontendData = recivedData.about.frontend;
  const backendData = recivedData.about.backend;
  const portfolioData = recivedData.portfolio;

  console.log(data);

  const firstTestimonial = useRef();
  const secondTestimonial = useRef();
  const fifthTestimonial = useRef();

  const firstCert = useRef();
  const secondCert = useRef();
  const thirdCert = useRef();
  const forthCert = useRef();
  const fifthCert = useRef();

  const projects = data.allMdx.edges;

  return (
    <>
      <SEO title="Main page" />

      <HeroStyles>
        <div className="text">
          <h2 className="subtitle">DAMJAN RADEV.</h2>
          <h1 className="title">Full Stack Developer</h1>
          <h3 className="caption">
            Highly experienced developer in creating blazing fast SEO friendly
            websites with custom backend or cms
          </h3>
          <button>
            <Link to="/#portfolio">SEE my work</Link>
          </button>
        </div>
      </HeroStyles>

      <SectionStyles id="about" className="about">
        <h1> ABOUT </h1>

        <div className="about__blocks">
          <AboutBlock data={frontendData} />

          <AboutBlock data={backendData} />
        </div>
      </SectionStyles>
      <SectionStyles id="portfolio" className="portfolio">
        <h1>My work</h1>
        <ul className="portfolio__list">
          {projects.map(({ node }) => (
            <PortfolioItem data={node} />
          ))}
        </ul>
      </SectionStyles>

      <SectionStyles className="testamonials">
        <h1>Testamonials</h1>
        <ul>
          <li className="testamonial">
            <div className="image-wrapper">
              <Image src="testamonial-avatar.png" className="img" />
              <p>Josh S</p>
            </div>
            <p className="testamonial__content">
              We are VERY happy with the work Damjan has completed! He has
              worked for us for the last year on a very big project. We have
              given him 100s of difficult tasks and they were all completely
              successfully. Damjan will take the time to research and find the
              best route to complete a task. He is very smart, reliable and
              always available. He will always remain in our hearts. Thank you
              Damjan for everything!
              <SkyLight hideOnOverlayClicked ref={firstTestimonial}>
                <Image src="upwork-testamonial.png" />
              </SkyLight>
              <a
                className="clickable"
                onClick={() => firstTestimonial.current.show()}
              >
                View Source
              </a>
              {/* <a
              href="https://www.upwork.com/freelancers/~016698a4e83f22f634"
              target="_blank"
            >
              View Source
            </a> */}
            </p>
          </li>
          <li className="testamonial">
            <div className="image-wrapper">
              <Image src="girl-avatar.png" className="img" />
              <p>Bre V</p>
            </div>
            <p className="testamonial__content">
              Damjan was great! Great work and a quick turnaround. Will
              absolutely work with him again in the future!
              <SkyLight hideOnOverlayClicked ref={secondTestimonial}>
                <Image src="testamonial-try-frame.png" />
              </SkyLight>
              <a
                className="clickable"
                onClick={() => secondTestimonial.current.show()}
              >
                View Source
              </a>
              {/* <a
              href="https://www.upwork.com/freelancers/~016698a4e83f22f634"
              target="_blank"
            >
              View Source
            </a> */}
            </p>
          </li>
          <li className="testamonial">
            <div className="image-wrapper">
              <Image src="testamonial-avatar.png" className="img" />
              <p>Hugo R</p>
            </div>
            <p className="testamonial__content">
              Damjan is a professional software developer; we have been working
              together for almost a year and he constantly delivers the project
              and features. He is able to produce quality, and tested coded and
              work independently. I would recommend anyone working with him
              <SkyLight hideOnOverlayClicked ref={fifthTestimonial}>
                <Image src="testamonial-ndw.png" />
              </SkyLight>
              <a
                className="clickable"
                onClick={() => fifthTestimonial.current.show()}
              >
                View Source
              </a>
              {/* <a
              href="https://www.upwork.com/freelancers/~016698a4e83f22f634"
              target="_blank"
            >
              View Source
            </a> */}
            </p>
          </li>
        </ul>
      </SectionStyles>

      <SectionStyles className="certificates">
        <h1>Certificates</h1>
        <ul>
          <li>
            <SkyLight hideOnOverlayClicked ref={firstCert}>
              <Image src="css.png" />
            </SkyLight>
            <p onClick={() => firstCert.current.show()}>
              Css-The Complete Guide(Flexbox, grid&Sass)
            </p>
          </li>
          <li>
            <SkyLight hideOnOverlayClicked ref={secondCert}>
              <Image src="node-js.png" />
            </SkyLight>
            <p onClick={() => secondCert.current.show()}>
              NodeJs-The Complete Guide(incl. MVC, REST APIs, GraphQL)
            </p>
          </li>
          <li>
            <SkyLight hideOnOverlayClicked ref={thirdCert}>
              <Image src="master-gatsby.png" />
            </SkyLight>

            <p onClick={() => thirdCert.current.show()}>
              Master Gatsby Advanced Course
            </p>
          </li>
          <li>
            <SkyLight hideOnOverlayClicked ref={forthCert}>
              <Image src="advanced-react.png" />
            </SkyLight>
            <p onClick={() => forthCert.current.show()}>
              Advanced React and GraphQL and Prisma
            </p>
          </li>
          <li>
            <SkyLight hideOnOverlayClicked ref={fifthCert}>
              <Image src="react.png" />
            </SkyLight>
            <p onClick={() => fifthCert.current.show()}>
              Modern React and Redux
            </p>
          </li>
        </ul>
      </SectionStyles>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            title
            image

            technologies
          }
        }
      }
    }
  }
`;

export default HomePage;
