const siteUrl = `https://marek-notariusz.pl`;

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Marek Wasilewski - notariusz`,
    siteUrl: siteUrl,
    description: `Kancelaria notarialna w Warszawie, ul. Modzelewskiego 63.
      Blisko stacji Metro Wierzbno i z dostępnym miejscem postojowym.
      Łatwy dostęp dla osób poruszających się na wózku inwalidzkim.`,
    author: 'Paulina Sędłak-Jakubowska',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
    'gatsby-plugin-cname',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: `/`,
        short_name: 'Marek Wasilewski - notariusz',
        name: 'Marek Wasilewski',
        icon: 'src/images/icon.svg',
        background_color: `#2D4263`,
        theme_color: `#2D4263`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
          };
        },
      },
    },
  ],
};
