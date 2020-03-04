module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Bricks Starter`,
        short_name: `gatsby-starter-react-bricks`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F65A8E`,
        display: `minimal-ui`,
        icon: `src/images/reactbricks-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
