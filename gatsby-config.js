/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Portfolio',
    description: 'Personal Programming Portfolio built in Gatsby and Typescript',
    siteUrl: 'https://nstromberg.github.io/portfolio',
    author: {
      name: 'Nathan Stromberg',
      url: 'nstromberg.github.io',
      email: 'nathan.b.stromberg@gmail.com',
    },
    social: {
      github: 'https://github.com/nstromberg',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Nathan Stromberg's Programming Portfolio",
        short_name: 'Portfolio',
        start_url: '/portfolio',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
  ],
};
