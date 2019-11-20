module.exports = {
  siteMetadata: {
    title: `US Bank Tower Lights`,
    description: `Timeline of the crown lights of the US Bank Tower in Los Angeles, California.`,
    author: `Ryan Ponce`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appwVNnKfpaDsMatk`,
            tableName: `Events`
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `US Bank Tower Lights`,
        short_name: `Tower Lights`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`
  ]
};
