// Global CSS Styles

import {css} from '@emotion/react'

import {colors, mq, weights} from './css-utils'
import 'normalize.css'

export const globalStyles = css`
  /*
   * Global Typography & Normalization
   */

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 100%;
    scrollbar-color: ${colors.independenceBlue} ${colors.darkBlue};
    ${mq.s} {
      font-size: 112.5%;
    }
  }

  body {
    margin: 0;
    font-family: sans-serif;
    line-height: 1.45;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    color: rgba(255, 255, 255, 0.74);
    background: ${colors.independenceBlue};
    scrollbar-width: thin;
  }

  footer,
  header,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  main {
    margin-top: 95px;
    min-height: 75vh;
    ${mq.phoneLarge} {
      margin-top: 230px;
    }
    ${mq.s} {
      margin-top: 200px;
    }
  }

  img {
    padding: 0;
    margin: 1.45rem 0 1.45rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0 0 1.45rem;
    font-family: serif;
    font-weight: 500;
    line-height: 1.1;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: ${weights.black};
    color: rgba(255, 255, 255, 0.74);

    font-variant-caps: petite-caps;
    letter-spacing: 1.2px;
  }

  h2 {
    font-size: 1.62671rem;
    margin: 0;
    font-variant-caps: petite-caps;
    letter-spacing: 1.2px;
  }

  h3 {
    font-size: 1.38316rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.85028rem;
  }

  h6 {
    font-size: 0.78405rem;
  }

  p {
    margin-bottom: 27px;
    font-size: 16px;
    letter-spacing: 0.2;
    line-height: 1.7;
    font-family: sans-serif;
    ${mq.phoneLarge} {
      margin-bottom: 30px;
    }
  }

  p *:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: inherit;
    transition: 0.3s ease all;

    &:hover,
    &:focus {
      outline-width: 0;
    }
  }

  b,
  strong {
    font-weight: 600;
  }

  ol li,
  ul li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /*
   * Global Form Styles
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: sans-serif;
    font: inherit;
  }

  optgroup {
    font-weight: 600;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  button:disabled {
    opacity: 0.2;
  }
`
