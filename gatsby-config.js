/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `私のGatybyサイト`,
        siteUrl: `https://www.yourdomain.tld`,
        description: "これはGatybyで作られたウェブサイトです。"
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp"
    ],
}
