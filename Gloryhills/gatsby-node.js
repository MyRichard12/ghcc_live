const { graphql } = require("gatsby");
const path = require("path");

// i do not need this again
// const slugger = (term) => {
//   return term.replace(" ", "-").toLowerCase();
// };

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const menuLinks = await graphql(`
    query {
      allMenuJson {
        nodes {
          title
          url
        }
      }
    }
  `);

  let links = menuLinks.data.allMenuJson.nodes

  links.forEach((edge, index) => {
    // don't use this technique for the home page being the first to come up on the list.
   if(index > 0){

    const page_link = edge.url

    createPage({
        path: `/${page_link}`,
        component: path.resolve('./src/components/pages/OtherPages.jsx'),
        context: {
            slug: page_link,
            title: edge.title
        }
    })

   }
  })
};
