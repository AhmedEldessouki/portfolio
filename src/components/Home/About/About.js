/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import { GoMarkGithub } from 'react-icons/go'
import { spinner, colors, weights } from '../../../Styles'
import AhmedEldessouki from '../../../assets/Layer 1@0,25x.png'

const MyInfo = () => {
  // const [profile, setProfile] = useState('')
  // const [isLoading, setIsLoading] = useState(true)
  // const [url, setUrl] = useState('https://api.github.com/users/ahmedeldessouki')

  // useEffect(() => {
  //   const myGitHub = async () => {
  //     const res = await axios(url)
  //     setProfile(res.data)
  //     setIsLoading(false)
  //     return [profile, isLoading]
  //   }
  //   myGitHub()
  //   //disabled because it will go into infinite calls
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [url])

  const container = css`
    display: grid;
    place-items: center;
    border-left: 45px solid ${colors.darkBlue};
    border-right: 45px solid ${colors.darkBlue};
    border-top: 22.5px solid ${colors.darkBlue};
    border-bottom: 22.5px solid ${colors.darkBlue};
    border-radius: 19%;
    gap: 36px;
    padding: 34px 88px;
    img {
      border: 15.5px solid ${colors.darkBlue};
      border-radius: 5%;
      grid-column: 1;
      grid-row: 1;
    }
    p {
      font-size: 150%;
      grid-column: 2 / span 3;
      grid-row: 1;
      letter-spacing: 0.1rem;
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
  `

  return (
    <div css={container}>
      <img src={AhmedEldessouki} alt='profilePicture' />
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
        <li className='follow-container'>Istanbul, Turkey</li>
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
          <a href='www.github.com/ahmedeldessouki' css={css``}>
            <GoMarkGithub /> Github Account
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MyInfo
