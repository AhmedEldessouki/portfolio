/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'

import {colors, weights} from '../Styles'

const Title = ({name, onClick, children}) => {
  const title = css`
    color: white;
    background-color: ${colors.darkBlue};
    padding: 8% 5%;
    letter-spacing: 1.4px;
    font-size: 1.82rem;
    font-weight: ${weights.medium};
    :hover,
    :focus {
      color: ${colors.independenceBlue};
      background: ${colors.aliceLightBlue};
    }
  `

  return (
    <button
      type="button"
      onClick={() => {
        onClick()
      }}
      css={css`
        background: transparent;
        border: none;
        width: 100%;
      `}
    >
      <h1 css={title}>{name}</h1>
    </button>
  )
}

function Tags({tags}) {
  return (
    <span
      css={css`
        padding: 10px 20px;
        font-size: 108%;
        color: ${colors.aliceLightBlue};
      `}
    >
      Add Tags
    </span>
  )
}

export {Title, Tags}
