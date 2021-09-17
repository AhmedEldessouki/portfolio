/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {GoMarkGithub} from 'react-icons/go'

import {colors, weights, mq} from '../../Styles'
import ImgWithFallback from '../Image'

const container = css`
  display: grid;
  place-items: center;
  background: #31354a;
  gap: 36px;
  padding: 3% 7.5%;
  img {
    border: 15.5px solid ${colors.darkBlue};
    border-radius: 5%;
    grid-column: 1;
    grid-row: 1;
  }
  p {
    font-size: 130%;
    grid-column: 2 / span 3;
    grid-row: 1;
    letter-spacing: 0.1rem;
  }
  ${mq.desktop} {
    p {
      font-size: 115%;
      letter-spacing: 0.02rem;
    }
  }
  ${mq.phoneLarge} {
    gap: 0;
    padding: 7% 1.5%;
    img {
      grid-row: 1;
      grid-column: 1;
    }
    p {
      grid-row: 2;
      grid-column: 1;
      padding: 0 13%;
      font-size: 105%;
      letter-spacing: 0.02rem;
    }
  }
  ${mq.s} {
    margin-bottom: 5%;
    border-radius: 0;
  }
`

const ulContainer = css`
  grid-row: 2;
  grid-column: 1 / span 4;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 9px solid ${colors.independenceBlue};
  border-radius: 20%;
  padding: 20px 55px;
  margin: 0;
  gap: 10px;
  background-color: ${colors.darkBlue};
  opacity: 0.8;
  li {
    font-size: 124%;
    margin: 0 15px;
    padding: 15px 25px;
    border: 4.5px solid ${colors.independenceBlue};
    font-weight: ${weights.light};
    border-radius: 20%;
    &:last-child &:hover,
    &:last-child &:focus {
      background-color: ${colors.independenceBlue};
    }
  }
  :hover,
  :focus {
    opacity: 1;
  }
  ${mq.phoneLarge} {
    flex-direction: column;
    grid-row: 3;
    grid-column: 1;
    li {
      font-size: 108%;
      text-align: center;
    }
  }
  ${mq.s} {
    display: none;
    grid-row: 2;
    grid-column: 1 / span 2;
  }
`
const MyInfo = () => {
  return (
    <div css={container}>
      <ImgWithFallback
        src="/images/pic.jp2"
        fallback="/images/pic.png"
        type="image/jp2"
        alt="profile Picture"
        height="265"
        width="265"
      />
      <p>
        I am Ahmed ElDessouki. Front-end developer using <em>React.js</em>{' '}
        Framework, small time <em>Designer</em>, and <em>Self-Improvement</em>{' '}
        driven person.
      </p>
      <ul css={ulContainer}>
        <li>Ahmed ElDessouki</li>
        <li className="follow-container">Istanbul, Turkey</li>
        <li
          css={css`
            font-style: italic;
            &:hover,
            &:focus {
              background-color: ${colors.independenceBlue};
              color: ${colors.blueFont};
            }
          `}
        >
          <a
            href="https://www.github.com/ahmedeldessouki"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <GoMarkGithub /> Github Account
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MyInfo
