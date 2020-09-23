/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaGooglePlusSquare,
} from 'react-icons/fa'
import {VscTwitter, VscGithub} from 'react-icons/vsc'
import {GrReactjs} from 'react-icons/gr'

import {colors, mq, weights} from '../../../Styles'

const MyFooter = () => {
  const fWrapper = css`
    display: grid;
    border-top: 13px solid ${colors.darkBlue};
    border-radius: 17%;
    padding-top: 30px;
  `
  const whereToFindMe = css`
    grid-row: 1;
    grid-column: 1 / span 2;
    place-self: start;
    padding-left: 20px;
    font-size: 219%;
    color: ${colors.darkBlue};
    & > * {
      padding-right: 5px;
    }
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 1;
      place-self: center;
    }
  `
  const reactIcon = css`
    grid-row: 1;
    grid-column: 3;
    place-self: center;
    font-size: 219%;
    color: #61dafb;
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 2;
      place-self: center;
    }
  `
  const copyWrite = css`
    grid-row: 1;
    grid-column: 4 / span 2;
    place-self: end;
    padding-right: 20px;
    padding-bottom: 30px;
    color: ${colors.darkBlue};
    font-size: 137%;
    font-weight: ${weights.black};
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 3;
      place-self: center;
    }
  `
  return (
    <footer css={fWrapper}>
      <div css={whereToFindMe}>
        <a href="https://www.linkedin.com/in/ahmedeldessouki/">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/ahmedeldessouki/">
          <VscGithub />
        </a>
        <a href="https://plus.google.com/+AhmedElDessouki1">
          <FaGooglePlusSquare />
        </a>
        <a href="https://www.instagram.com/eldessouki.a">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/ahmed.eldessouki.39">
          <FaFacebookSquare />
        </a>
        <a href="https://www.twitter.com/nem0adam">
          <VscTwitter />
        </a>
      </div>
      <div css={reactIcon}>
        <a href="https://reactjs.org/">
          <GrReactjs />
        </a>
      </div>
      <div css={copyWrite}>
        <span>© 2019 Ahmed ElDessouki</span>
      </div>
    </footer>
  )
}
export default MyFooter
