import { css } from "./node_modules/@emotion/core";

export const GlobalStyles = css`
  body,
  header {
    margin: 0;
    padding: 0;
    font-family: "Merienda One", cursive;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
    button {
      border: 0 solid;
      &:active {
        transform: translateY(4px);
      }
    }
  }
  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  code {
    font-family: "Merienda One", cursive;
  }
`;
