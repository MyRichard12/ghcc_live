module.exports = {
    siteMetadata : {
        title: `Glory Hills Community Church`,
        description: `Official GHCC Website`,
        siteUrl: `https://ghccglobal.org`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `otherPages`,
                path: `${__dirname}/src/siteContents/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/datalogs/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/datalogs/images/`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options:{
              extensions: [`.md`, `.mdx`],
              name: `blog`,
              path: `${__dirname}/src/datalogs/events/`,
              gatsbyRemarkPlugins: [{
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1200,
                }
              }
              ]
            }
          }
    ]
}