const projects = [
  {
    id: 'canvas',
    title: 'Canvas API',
    routeLink: '/projects/canvas',
    isLinkAbsolute: false,
    description: 'Manipulation of the graphics using the Canvas API in Javascript',
    items: [
      {
        title: 'Fractals',
        description: 'Fractals are shapes that have fractional dimensions',
        link: 'https://vighnesh153-canvas.github.io/fractals'
      },
      {
        title: 'Algorithms Visualizer',
        description: 'I attempt to visualize some of the algorithms that, may or may not be the most efficient ones, ' +
          'in terms of time and/or space complexity, but are important and fun to understand how they work.',
        link: 'https://vighnesh153-canvas.github.io/algorithms-visualizer'
      },
      {
        title: 'Games',
        description: 'A collection of arcade games that I built in my free time',
        link: 'https://vighnesh153-canvas.github.io/games'
      }
    ]
  },
  {
    id: 'unity',
    title: 'Unity Projects',
    routeLink: '/projects/unity',
    description: 'Some fun projects made in Unity',
    isLinkAbsolute: false,
    items: []
  },
  {
    id: 'npm',
    title: 'NPM Packages',
    routeLink: 'https://www.npmjs.com/~vighnesh153',
    description: 'A collection of utility packages and command-line tools',
    isLinkAbsolute: true,
    items: []
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    routeLink: 'https://play.google.com/store/search?q=vighnesh153&c=apps&hl=en',
    description: 'A bunch of mobile applications',
    isLinkAbsolute: true,
    items: []
  }
];

export const common = {
  toastDurationInSeconds: 3,
  corsAnywherePrefix: 'https://cors-anywhere.herokuapp.com/',
  personal: {
    email: 'vighnesh.raut13@gmail.com',
    resumeUrl: 'https://drive.google.com/open?id=1u_8oDHemUAYZdO99AGEYX8iqRrl3lNGO',
    linkedIn: 'https://www.linkedin.com/in/vighnesh153',
    github: {
      profile: 'https://github.com/vighnesh153'
    },
    projects
  }
};
