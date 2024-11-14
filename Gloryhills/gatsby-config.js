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
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `otherPages`,
                path: `${__dirname}/src/siteContents/`
            }
        }
    ]
}