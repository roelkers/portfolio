const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiBlog {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlog.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/post.tsx`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getArticles;
};
