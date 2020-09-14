/** @jsx jsx */
// eslint-disable-next-line import/order
import {jsx, css} from '@emotion/core'

import my from '../../assets/my.svg'
import {colors, mq} from '../../Styles'

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
      <img src={my} alt="Ahmed Eldessouki" css={imgg} />
    </div>
  )
}

export default UnAuthNavlinks
