/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'

import {colors, mq, warning, weights} from '../Styles'

function ErrorMessageFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" css={[warning, {background: colors.independenceBlue}]}>
      <p>There was an error: </p>
      <pre>{error.message}</pre>
      <button
        onClick={() => {
          // resetComponentState()
          resetErrorBoundary()
        }}
      >
        Try again
      </button>
    </div>
  )
}

function Title({name = '', onClick, highlight = false, testId, csx}) {
  const title = [
    css`
      padding: 15px 10px;
      font-size: 1.62rem;
      font-weight: ${weights.medium};
      border-radius: 13%;
      margin: 0;
      text-transform: capitalize;
      transition: cubic-bezier(1, 0, 0, 1) 0.5s;
      :hover {
        cursor: pointer;
        font-family: sans-serif;
      }
      ${mq.s} {
        font-size: 1.2rem;
      }
    `,
    {
      background: highlight ? colors.whiteFaded : colors.darkBlue,
      color: highlight ? colors.darkBlue : colors.whiteFaded,
      fontFamily: highlight ? 'sans-serif' : 'sans',
    },
  ]

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
      <h1 css={[title, csx]} data-testid={testId} key={testId}>
        {name}
      </h1>
    </button>
  )
}

export {ErrorMessageFallback, Title}
