module.exports = {
    siteMetadata : {
        title: `Glory Hills Community Church`,
        description: `Official GHCC Website`,
        siteUrl: `https://ghcc.com`
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
                path: "./src/siteContents/"
            }
        }
    ]
}