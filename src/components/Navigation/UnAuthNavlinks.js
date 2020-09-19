/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {NavLink} from 'react-router-dom'

import my from '../../assets/my.svg'
import {colors, mq} from '../../Styles'
// try in production
// import my from './my.svg'

const UnAuthNavlinks = () => {
  const container = css`
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: center;
  `
  const imgg = css`
    width: 267px;
    padding: 9px 21px;
    background-color: ${colors.independenceBlue};
    ${mq.s} {
      width: 232px;
    }
  `
  return (
    <div css={container}>
      <NavLink to="/">
        <img src={my} alt="Ahmed Eldessouki" css={imgg} />
      </NavLink>
    </div>
  )
}

export default UnAuthNavlinks
