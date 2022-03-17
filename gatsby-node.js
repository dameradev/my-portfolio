const path = require("path");
// const { portfolio } = require("./src/utils/data");
async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve("./src/pages/project.js");

  const portfolio = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              technologies
              slideshow {
                image
                image_alt
              }
              testMessage
              testResult
              website
            }
          }
        }
      }
    }
  `);
  console.log(portfolio.data.allMdx.edges);
  const projects = portfolio.data.allMdx.edges;

  // 3. Loop over each pizza and create a page for that pizza
  projects.forEach(({ node }, index) => {
    const previousPostId = index === 0 ? null : projects[index - 1].node.id;
    const nextPostId =
      index === projects.length - 1 ? null : projects[index + 1].node.id;

    actions.createPage({
      // What is the URL for this new page??
      path: node.slug,
      component: projectTemplate,
      context: {
        id: node.id,
        previousPostId,
        nextPostId,
      },
    });
  });
}
// async function createPages(params) {
//   // Create pages dynamically
//   // Wait for all promises to be resolved before finishing this function
//   await Promise.all([turnProjectsIntoPages(params)]);
// }

exports.createPages = async (params) => {
  // await createBlogPostPages(graphql, actions);

  await turnProjectsIntoPages(params);
};
