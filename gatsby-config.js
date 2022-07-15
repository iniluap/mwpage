module.exports = {
  siteMetadata: {
    title: `Marek Wasilewski - notariusz`,
    siteUrl: `http://marek-notariusz.pl`,
    description: `Kancelaria notarialna w Warszawie, ul. Modzelewskiego 63.
      Blisko stacji Metro Wierzbno i z dostępnym miejscem postojowym.
      Łatwy dostęp dla osób poruszających się na wózku inwalidzkim.`,
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
  ],
};
