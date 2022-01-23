export const data = {
  about: {
    frontend: {
      icon: "frontendIcon",
      title: "Front-end",
      description:
        "Responsive websites built using the latest technologies for optimal UX",
      languages: {
        title: "Languages",
        items: ["Html5", "Css3", "Scss/Sass", "Java Script"],
      },
      devTools: {
        title: "Technologies",
        items: [
          "React JS (React Hooks)",
          "Material Ui",
          "Next JS",
          "Gatsby JS",
          "Graphql",
        ],
      },
    },
    backend: {
      icon: "backendIcon",
      title: "CUSTOM BACKEND/CMS",
      description:
        "You will get an admin Ui with which you can control the content users see on your website",
      languages: {
        title: "Technologies",
        items: ["Node JS", "Java Script", "Prisma", "Graphql"],
      },
      devTools: {
        title: "CMS",
        items: ["Shopify", "Sanity", "Strapi", "Keystone"],
      },
    },
  },
  portfolio: {
    [1]: {
      title: "Non-stop dogwear",
      image: { src: "ndw-1.png", alt: "" },
      technologies: [
        "Next JS",
        "React JS",
        "Graphql",
        "Prisma-DB",
        "Node JS",
        "Tailwind css",
        "Apollo",
      ],
      slideshow: [
        { src: "ndw-1.png", alt: "b2b customer page" },
        { src: "ndw-b2b.png", alt: "b2b customer page" },
        { src: "ndw-dashboard.png", alt: "b2b customer page" },
      ],
      description: [
        `Client had hundreds of companies that make weekly orders from them.
         They are a major dog gear vendor based in Norway. My job was to create a platform which 
         will make an easy to use interface for their customers (businesses) to make orders`,
        `They also needed a dashboard with which they could manage information about their customers more easily.`,
        `Big and difficult part of this project was connecting
         the database (data received from customers) to their already functioning ERP system.`,
        `The platform cannot be opened by a non customer so a demo is not available, nor is the codebase.`,
      ],

      testMessage: "Testamonial from client",
      testResult: "testamonial-ndw.png",
    },

    [2]: {
      title: "Platform for erasmus projects",
      image: { src: "pep.png", alt: "" },
      website: "https://pep-seven.vercel.app/",
      github: "https://github.com/dameradev/aladin",
      technologies: [
        "Next JS",
        "React JS",
        "Graphql",
        "Prisma-DB",
        "Node JS",
        "Material UI",
        "Apollo",
      ],
      slideshow: [
        { src: "slideshow-pep.png", alt: "homepage" },
        {
          src: "slideshow-pep1.png",
          alt: "Project page, staticaly rendered",
        },
        { src: "slideshow-pep2.png", alt: "Organization profile" },
      ],
      description: [
        `This is the crown jewel of my projects, I've been building it for over a year now.
         And it's safe to say this project made me learn so much stuff about both frontend 
         and backend technologies. I started this project from scratch and it grew over time, 
         as I grew with it. It's still in development mode (some things might not work as expected).`,
        `This web-app is build for the European organization for young people Erasmus+, it allows NGO organization
        which are hosting projects all over Europe, to publish them here, with all the necessary 
        information in a well organized way.`,
        `It also has a search page where students and young people can easily find the exact project they are looking for.`,
        `It uses prisma2 as a database, and with a nodeJS express server and a graphql API, dataflow is superfast. `,
        `On the frontend I'm using a server(pre)-rendered approach using NextJS, which allows the app to be SEO friendly and highly performant`,
      ],
      testResult: "testing-pep.png",
    },
    [3]: {
      title: "Try frame page redesign",
      image: { src: "try-frame.png", alt: "" },
      website: "#",
      technologies: ["Next JS", "React JS", "SCSS", "Material UI"],
      slideshow: [
        { src: "try-frame.png", alt: "Therapists page" },
        { src: "try-frame1.png", alt: "Therapists page" },
        { src: "try-frame2.png", alt: "Therapists page" },
      ],
      description: [
        `This was a one time project for page redesign, and develop. I've worked on it for approx 30hrs.`,
      ],
      testMessage: "Testamonial from client",
      testResult: "testamonial-try-frame.png",
    },
    [4]: {
      title: "Aladinko",
      website: "https://aladinko.si",
      github: "https://github.com/dameradev/aladin",
      image: { src: "aladinko.png", alt: "" },
      technologies: ["Gatsby JS", "React JS", "CSS-in-JS"],
      slideshow: [
        { src: "slideshow-aladinko.png", alt: "homepage" },
        {
          src: "slideshow-aladinko1.png",
          alt: "Cleaning process grid (gatsby image)",
        },
        { src: "slideshow-aladinko2.png", alt: "Price table" },
      ],
      description: [
        ` This project includes only a landing page, for a carpet cleaning
      company based in Maribor, Slovenia. It's build using only GatsbyJS,
      no backend was used.`,
        `In this way, I made sure the client has to pay the minimal amount
      (only hosting), and get slick looking fast and SEO friendly website`,
      ],
      testResult: "testing-aladinko.png",
    },
  },
};

export const portfolio = [
  {
    id: 1,
    title: "Non stop dogwear",
    image: { src: "ndw-1.png", alt: "" },
    technologies: ["Gatsby JS", "React JS", "CSS-in-JS", "Shopify-CMS"],
  },

  {
    id: 2,

    title: "Platform for erasmus projects",
    image: { src: "pep.png", alt: "" },
    technologies: [
      "Next JS",
      "React JS",
      "Graphql",
      "Prisma-DB",
      "Node JS",
      "Material UI",
      "Apollo",
    ],
  },
  {
    id: 3,
    title: "Try frame page redesign",
    image: { src: "try-frame.png", alt: "Therapists page redesign" },
    technologies: ["Next JS", "React JS", "SCSS", "Material UI"],
  },
  {
    id: 4,
    title: "Aladinko",
    image: { src: "aladinko.png", alt: "" },
    technologies: ["Gatsby JS", "React JS", "CSS-in-JS"],
  },
];
