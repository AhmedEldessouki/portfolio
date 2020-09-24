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

  return (
    <div css={container}>
      <NavLink to="/">
        {my ? (
          <img
            src={my}
            alt="Ahmed ElDessouki"
            style={{width: '150px', padding: '0'}}
          />
        ) : (
          <h1 style={{width: '150px', padding: '0'}}>Ahmed Eldessouki</h1>
        )}
      </NavLink>
    </div>
  )
}

export default UnAuthNavlinks
