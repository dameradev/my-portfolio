// const path = require("path");
// const { portfolio } = require("./src/utils/data");
// async function turnProjectsIntoPages({ graphql, actions }) {
//   // 1. Get a template for this page
//   const projectTemplate = path.resolve("./src/pages/project.js");
//   console.log(actions);

//   // 3. Loop over each pizza and create a page for that pizza
//   portfolio.forEach((portfolioItem) => {
//     console.log(portfolioItem);
//     const title = portfolioItem.title.toLowerCase().split(" ").join("-");
//     actions.createPage({
//       // What is the URL for this new page??
//       path: `project/${title}`,
//       component: projectTemplate,
//       context: {
//         id: portfolioItem.id,
//       },
//     });
//   });
// }
// // async function createPages(params) {
// //   // Create pages dynamically
// //   // Wait for all promises to be resolved before finishing this function
// //   await Promise.all([turnProjectsIntoPages(params)]);
// // }

// exports.createPages = async (params) => {
//   // await createBlogPostPages(graphql, actions);

//   await turnProjectsIntoPages(params);
// };
