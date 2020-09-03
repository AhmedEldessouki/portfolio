const breakpoints = [320, 480, 900, 1220];
const names = [`xs`, `s`, `phoneLarge`, `desktop`];

export const mq = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (max-width: ${bp}px)`;
  return acc;
}, {});

export const colors = {
  lightBlue: `#d4dff6`,
  darkBlue: `#282c34`,
  red: `#ff000e`,
  myBackgroundBlue: `#23527c`,
  navBackgroundBlue: `#337ab7`,
};
