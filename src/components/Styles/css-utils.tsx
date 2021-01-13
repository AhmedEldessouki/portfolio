const breakpoints: Array<number> = [320, 480, 900, 1220]
const names: Array<string> = [`xs`, `s`, `phoneLarge`, `desktop`]

export const mq = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media screen and (max-width: ${bp}px)`
  return acc
}, {} as Record<string, string>)

export const colors = {
  blueFont: ` rgb(0, 153, 255)`,
  whiteFaded: `rgba(255, 255, 255, 0.74)`,
  aliceLightBlue: `#E9F1F7`,
  lightBlue: `#a5e6ec`,
  kindaBlue: `#337ab7`,
  kindaDarkBlue: `#23527c`,
  independenceBlue: `#3A405A`,
  backgroundShade: ` #31354a`,
  darkBlue: `#282c34`,
  red: `tomato`,
  burgundyRed: '#890620',
  lightGreen: '#1BBC9B',
  gatsbyPurple: '#663399',
}

export const weights = {
  thin: `100`,
  light: `300`,
  regular: `400`,
  medium: `500`,
  bold: `700`,
  black: `900`,
}
