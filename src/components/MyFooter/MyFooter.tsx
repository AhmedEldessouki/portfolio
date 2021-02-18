/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaGooglePlusSquare,
  FaGoodreads,
} from 'react-icons/fa'
import {VscTwitter, VscGithub} from 'react-icons/vsc'
import {GrReactjs} from 'react-icons/gr'
import {Link} from 'react-router-dom'

import {colors, mq, weights} from '../../Styles'

const MyFooter = () => {
  const fWrapper = css`
    display: grid;
    padding: 10px;
    background: ${colors.darkBlue};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: calc(100% - 20px);
    div {
      line-height: 38px;
    }
    ${mq.phoneLarge} {
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr;
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
    color: ${colors.whiteFaded};
    place-self: flex-start;
    & > * {
      transition: color 200ms ease-in;
      padding-right: 5px;
      :hover {
        color: ${colors.blueFont};
      }
    }
    ${mq.phoneLarge} {
      padding-left: 0;
    }
  `
  const reactIcon = css`
    font-size: 219%;
    color: ${colors.blueFont};
    place-self: center;
  `
  const copyWrite = css`
    padding-right: 20px;
    color: ${colors.whiteFaded};
    font-weight: ${weights.light};
    place-self: flex-end;
  `
  return (
    <footer css={fWrapper} role="contentinfo">
      <div css={whereToFindMe}>
        <a
          target="_blank"
          aria-label="Read more about me on linkedin"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ahmedeldessouki/"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Check more of my work on Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmedeldessouki/"
        >
          <VscGithub />
        </a>
        <a
          aria-label="Check more about me on Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://plus.google.com/+AhmedElDessouki1"
        >
          <FaGooglePlusSquare />
        </a>
        <a
          aria-label="Check more about me on Instagram or get in touch with me"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/eldessouki.a"
        >
          <FaInstagram />
        </a>
        <a
          aria-label="Check more about me on Facebook or get in touch with me"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/ahmed.eldessouki.39"
        >
          <FaFacebookSquare />
        </a>
        <a
          aria-label="Check more about me on Twitter or get in touch with me"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/nem0adam"
        >
          <VscTwitter />
        </a>
        <a
          aria-label="Check more about what kind of books i want to read on goodreads"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.goodreads.com/review/list/18907056?ref=nav_mybooks"
        >
          <FaGoodreads />
        </a>
      </div>
      <div css={reactIcon}>
        <a
          target="_blank"
          aria-label="If you wonder more about React.js. Check this link"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          <GrReactjs color={colors.blueFont} />
        </a>
      </div>
      <div css={copyWrite}>
        <Link
          to="/signin"
          aria-label="© 2021 Ahmed ElDessouki"
          css={{
            ':hover': {
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'context-menu',
            },
          }}
        >
          <span>© 2021 Ahmed ElDessouki</span>
        </Link>
      </div>
    </footer>
  )
}
export default MyFooter
