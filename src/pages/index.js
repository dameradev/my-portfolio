import React from "react";

import { Link } from "gatsby-plugin-modal-routing";

import AboutBlock from "../components/AboutBlock";
import PortfolioItem from "../components/Portfolio/Item";
import SEO from "../components/SEO";
import Image from "../components/Image";

import { HeroStyles, SectionStyles } from "../styles/HomePage";
import { data } from "../utils/data";

const HomePage = () => {
  const frontendData = data.about.frontend;
  const backendData = data.about.backend;
  const portfolioData = data.portfolio;

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
          <PortfolioItem data={portfolioData[4]} />
          <PortfolioItem data={portfolioData[2]} />
          <PortfolioItem data={portfolioData[1]} />
          <PortfolioItem data={portfolioData[3]} />
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
              <Link
                to="/image"
                asModal
                state={{ modal: true, image: "upwork-testamonial" }}
              >
                View Source
              </Link>
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
              <Link
                to="/image"
                asModal
                state={{ modal: true, image: "testamonial-try-frame" }}
              >
                View Source
              </Link>
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
              <Link
                to="/image"
                asModal
                state={{ modal: true, image: "testamonial-ndw" }}
              >
                View Source
              </Link>
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
          <li>Css-The Complete Guide(Flexbox, grid&Sass)</li>
          <li>
            <Link to="/image" asModal state={{ modal: true, image: "node-js" }}>
              NodeJs-The Complete Guide(incl. MVC, REST APIs, GraphQL)
            </Link>
          </li>
          <li>
            <Link
              to="/image"
              asModal
              state={{ modal: true, image: "master-gatsby" }}
            >
              Master Gatsby Advanced Course
            </Link>
          </li>
          <li>
            <Link
              to="/image"
              asModal
              state={{ modal: true, image: "advanced-react" }}
            >
              Advanced React and GraphQL and Prisma
            </Link>
          </li>
          <li>
            <Link to="/image" asModal state={{ modal: true, image: "react" }}>
              Modern React and Redux
            </Link>
          </li>
        </ul>
      </SectionStyles>
    </>
  );
};

export default HomePage;
