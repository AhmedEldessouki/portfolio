/**@jsx jsx */
import {jsx, css} from '@emotion/core'
import {GoMarkGithub} from 'react-icons/go'

import {colors, weights, mq} from '../../../Styles'
import AhmedEldessouki from '../../../assets/Layer 1@0,25x.png'

const MyInfo = () => {
  const container = css`
    display: grid;
    place-items: center;
    margin-bottom: 3%;
    border-top: 22.5px solid ${colors.darkBlue};
    border-bottom: 22.5px solid ${colors.darkBlue};
    border-radius: 19%;
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
      border-radius: 6%;
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
    border: 9px solid ${colors.kindaDarkBlue};
    border-radius: 20%;
    padding: 20px 55px;
    margin: 0;
    background-color: ${colors.darkBlue};
    & li {
      font-size: 124%;
      margin: 0 15px;
      padding: 15px 25px;
      background-color: ${colors.whiteFaded};
      color: ${colors.independenceBlue};
      border: 4.5px solid ${colors.independenceBlue};
      font-weight: ${weights.bold};
      border-radius: 20%;
      &:last-child &:hover,
      &:last-child &:focus {
        background-color: ${colors.independenceBlue};
        color: ${colors.whiteFaded};
      }
    }
    ${mq.phoneLarge} {
      flex-direction: column;
      grid-row: 3;
      grid-column: 1;

      li {
        font-size: 108%;
        width: 10rem;
        text-align: center;
        letter-spacing: 1.2px;
      }
    }
    ${mq.s} {
      display: none;
      grid-row: 2;
      grid-column: 1 / span 2;
    }
  `

  return (
    <div css={container}>
      <img src={AhmedEldessouki} alt="profilePicture" />
      <p>
        Welcome! I'm Ahmed Eldessouki. I'm 31 years old from Cairo, Egypt
        currently living in <b>Istanbul, Turkey</b>. I looking for a new
        opportunity as a<em> Front-End Developer</em>. I graduated from
        University Of Wales. I worked at RoomMe as an entry level Front-End
        Developer. I'm a very passionate about Front-End Developer. Always
        developing myself. A strength of mine, is my ability to be observant of
        small details and to stay up-to-date with the newest{' '}
        <em>technologies and techniques</em>.
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
              color: ${colors.whiteFaded};
            }
          `}
        >
          <a href="www.github.com/ahmedeldessouki" css={css``}>
            <GoMarkGithub /> Github Account
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MyInfo
