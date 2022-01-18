const paths = {
  image: '/img/projects/',
  portfolio: 'bruggeman.dev',
  github: 'https://github.com/TibowB/'
}


export const state = () => ({
  projects: [
    {
      id: 1,
      name: 'Random Color Generator',
      imagePath: `${paths.image}random.png`,
      imageAlt: 'Image of the project Random Color Generator',
      live: `https://random-color-generator.${paths.portfolio}`,
      code: `${paths.github}random-color-generator`,
    },
    {
      id: 2,
      name: 'CityHall',
      imagePath: `${paths.image}cityhall.png`,
      imageAlt: 'Image of the project CityHall',
      live: `https://cityhall.${paths.portfolio}`,
      code: `${paths.github}cityhall`,
    },
    {
      id: 3,
      name: 'Get A Burger',
      imagePath: `${paths.image}getaburger.png`,
      imageAlt: 'Image of the project Get A Burger',
      live: `https://get-a-burger.${paths.portfolio}`,
      code: `${paths.github}get-a-burger`,
    },
    {
      id: 4,
      name: 'Kitchenband',
      imagePath: `${paths.image}kitchenband.png`,
      imageAlt: 'Image of the project Kitchenband',
      live: `https://kitchenband.${paths.portfolio}`,
      code: `${paths.github}kitchenband`,
    },
  ],
});
