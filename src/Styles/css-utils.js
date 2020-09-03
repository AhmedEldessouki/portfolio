const breakpoints = [320, 480, 900, 1220];
const names = [`xs`, `s`, `phoneLarge`, `desktop`];

export const mq = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (max-width: ${bp}px)`;
  return acc;
}, {});

export const colors = {
  whiteFaded: `rgba(255, 255, 255, 0.7)`,
  aliceLightBlue: `#E9F1F7`,
  lightBlue: `#a5e6ec`,
  kindaBlue: `#337ab7`,
  kindaDarkBlue: `#23527c`,
  independenceBlue: `#3A405A`,
  darkBlue: `#282c34`,
  red: `#ff000e`,
  burgundyRed: '#890620',
  gatsbyPurple: '#663399',
};

export const weights = {
  thin: `100`,
  light: `300`,
  regular: `400`,
  medium: `500`,
  bold: `700`,
  black: `900`,
};
