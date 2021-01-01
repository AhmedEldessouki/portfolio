/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaGooglePlusSquare,
} from 'react-icons/fa'
import {VscTwitter, VscGithub} from 'react-icons/vsc'
import {GrReactjs} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import {colors, mq, weights} from '../Styles'

const MyFooter = () => {
  const fWrapper = css`
    display: flex;
    padding-top: 10px;
    place-content: space-between;
    flex-wrap: wrap;
    background: ${colors.darkBlue};
    div {
      line-height: 38px;
    }
    ${mq.phoneLarge} {
      div {
        width: 100%;
        display: flex;
        place-content: center;
      }
    }
  `
  const whereToFindMe = css`
    padding-left: 20px;
    font-size: 219%;
    color: ${colors.independenceBlue};
    & > * {
      padding-right: 5px;
      :hover {
        color: ${colors.whiteFaded};
      }
    }
    ${mq.phoneLarge} {
    }
  `
  const reactIcon = css`
    font-size: 219%;
    color: ${colors.blueFont};
  `
  const copyWrite = css`
    padding-right: 20px;
    color: ${colors.independenceBlue};
    font-weight: ${weights.light};
  `
  return (
    <footer css={fWrapper}>
      <div css={whereToFindMe}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ahmedeldessouki/"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmedeldessouki/"
        >
          <VscGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://plus.google.com/+AhmedElDessouki1"
        >
          <FaGooglePlusSquare />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/eldessouki.a"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/ahmed.eldessouki.39"
        >
          <FaFacebookSquare />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/nem0adam"
        >
          <VscTwitter />
        </a>
      </div>
      <div css={reactIcon}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          <GrReactjs color={colors.blueFont} />
        </a>
      </div>
      <div css={copyWrite}>
        <Link
          to="/signin"
          css={css`
            :hover {
              color: inherit;
              cursor: context-menu;
            }
          `}
        >
          <span>© 2019 Ahmed ElDessouki</span>
        </Link>
      </div>
    </footer>
  )
}
export default MyFooter
