/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx, SerializedStyles} from '@emotion/react'

import {colors, mq, warning, weights} from '../Styles'

interface ErrorMessageFallbackProps {
  resetErrorBoundary: (...args: Array<unknown>) => void
  error: {code: string; message: string}
}

function ErrorMessageFallback({
  error,
  resetErrorBoundary,
}: ErrorMessageFallbackProps) {
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

interface TitleProps {
  name: string
  onClick: () => void
  highlight?: boolean
  testId: string
  csx?: SerializedStyles
}

function Title({
  name = '',
  onClick,
  highlight = false,
  testId,
  csx,
}: TitleProps) {
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
