/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {NavLink} from 'react-router-dom'

import my from '../../assets/my.svg'
import {colors} from '../../Styles'

const UnAuthNavlinks = () => {
  const container = css`
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: center;
  `
  const h1a = css`
    padding: 10px 23px;
    color: ${colors.whiteFaded};
    font-size: 2.6rem;
    background: ${colors.independenceBlue};
    margin: 16px 0;
    letter-spacing: -0.5px;
    border-radius: 12%;
    :hover {
      color: ${colors.aliceLightBlue};
      background: ${colors.kindaDarkBlue};
    }
  `
  const imgA = css`
    width: 284px;
    padding: 10px 15px;
    background: ${colors.independenceBlue};
    border-radius: 12%;
    :hover {
      background: ${colors.kindaDarkBlue};
    }
  `
  return (
    <div css={container}>
      <NavLink to="/">
        {my ? (
          <img src={my} css={imgA} alt="Ahmed ElDessouki" />
        ) : (
          <h1 css={h1a}>Ahmed Eldessouki</h1>
        )}
      </NavLink>
    </div>
  )
}

export default UnAuthNavlinks
