const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allContentfulWhoIsMatt {
        edges {
          node {
            name
          }
        }
      }
    }
  `);
  data.allContentfulWhoIsMatt.edges.forEach(edge => {
    const name = edge.node.name;
    actions.createPage({
      path: '/serene_matt',
      component: require.resolve(`./src/pages/index.tsx`),
      context: { name }
    });
  });
};
