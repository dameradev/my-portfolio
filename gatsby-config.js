const path = require("path");
module.exports = {
  // pathPrefix: "",
  siteMetadata: {
    title: `Damjan Radev`,
    siteUrl: "https://radevcoding.com",
    description:
      "Highly experienced developer in creating blazing fast SEO friendly websites with custom backend/cms",
    twitter: "@dameradev",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          // `source sans pro\: 100,300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          closeTimeoutMS: 500,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
