module.exports = {
  siteMetadata: {
    title: 'ЖК Белый Город',
    description: 'Квартиры в новом ЖК "Белый Город" (мкр. Луговое). Строительство ведётся в районе с развитой ' +
      'инфраструктурой в пешей доступности есть детский сад, поликлиника, торговый центр, фитнес клуб, аптеки, кафе. ' +
      'Остановки общественного транспорта связывают район со всеми значимыми объектами города, а дорога открывает ' +
      'быстрые и комфортные маршруты для личного транспорта. Мы предлагаем квартиры способные удовлетворить любые ' +
      'запросы, от студий до четырёхкомнатных в трёхэтажных домах. Все квартиры с балконами. Сдача 4-й квартал 2022г.',
    siteUrl: 'https://xn--38-9kcife2ap3aav2k.xn--p1ai',
    author: 'melges-morgen',
    image: '/images/seo-common.webp'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ЖК Белый Город Иркутск, мкр.Луговое`,
        short_name: `ЖК Белый Город`,
        start_url: `/`,
        background_color: `#6ec6ff`,
        theme_color: `#2196f3`,
        display: `standalone`,
        icon: `${__dirname}/src/images/whitecity38-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173527196-1",
        head: false,
        anonymize: false,
        respectDNT: true,
        exclude: ["/preview/**"],
        defer: true
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 65904625,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: true,
      },
    },
  ],
}
