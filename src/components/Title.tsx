/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'

import {TitleProps} from '../../types/interfaces'
import {colors, mq, weights} from '../Styles'
import {replaceWhiteSpaceWith} from '../Utils/replaceWhiteSpaceWith'

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
    <li
      css={{width: '100%', listStyle: 'none'}}
      aria-describedby={`${replaceWhiteSpaceWith(name, '-')}-described`}
      aria-labelledby={`${replaceWhiteSpaceWith(name, '-')}-labelled`}
    >
      <button
        aria-label={`view ${name}`}
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
        <h2
          css={[title, csx]}
          data-testid={testId}
          key={testId}
          id={replaceWhiteSpaceWith(name, '-')}
        >
          {name}
        </h2>
      </button>
    </li>
  )
}

export default Title
