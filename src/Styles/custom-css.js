import { css } from '@emotion/core'

import { colors, mq, weights } from './index'

export const wrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: center;
  min-height: 267px;
  margin: 1% auto;
  padding: 50px;

  ${mq.xs} {
    flex-direction: column;
  }
`

export const spinner = css`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 10px ${colors.aliceLightBlue};
  border-bottom-color: ${colors.kindaBlue};
  border-radius: 50%;
  content: '';
  height: 40px;
  width: 40px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
`

export const btnStyle = css`
  place-self: center;
  background-color: ${colors.whiteFaded};
  color: ${colors.independenceBlue};
  font-family: serif;
  font-weight: ${weights.black};
  font-size: 174%;
  width: 300px;
  margin: 10px 50px;
  height: 50px;
  border-radius: 14%;
  border: 0px;
  transition: background-color, color 0.4s steps;
  :hover,
  :focus {
    color: ${colors.whiteFaded};
    background-color: ${colors.darkBlue};
  }
  ${mq.phoneLarge} {
    transform: scale(0.9);
  }
  ${mq.s} {
    transform: scale(0.7);
  }
`

export const signWrapper = css`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 0 0 20px;
  background-color: ${colors.independenceBlue};
  width: 550px;
  padding: 20px;
  border: 5px solid ${colors.darkBlue};
  border-radius: 20px;
  ${mq.phoneLarge} {
    width: 407px;
  }
  ${mq.s} {
    transform: scale(0.7);
  }
`

export const signWrapperInput = css`
  padding: 8px;
  width: inherit;
  height: 30px;
  background-color: transparent;
  color: ${colors.aliceLightBlue};
  border: 4.5px solid ${colors.aliceLightBlue};
  border-radius: 7%;
`

export const warning = css`
  color: ${colors.red};
  padding-left: 16px;
  padding-bottom: 2px;
`

export const labelWrapper = css`
  display: block;
  width: calc(550px - 50px);
  padding: 2px;
  margin-right: 19px;
  ${mq.phoneLarge} {
    width: calc(407px - 30px);
  }
  ${mq.s} {
    width: calc(394px - 25px);
  }
`

export const textArea = css`
  width: inherit;
  height: calc(100% - 14px);
  padding: 8px;
  padding-bottom: 0;
  color: ${colors.aliceLightBlue};
  border: 5px solid ${colors.whiteFaded};
  border-radius: 7%;
  background-color: transparent;
  margin-left: 10px;

  ${mq.phoneLarge} {
    margin-left: 0;
    height: 124px;
  }
`
export const h1XL = css`
  font-size: 200%;
  font-family: serif;
  font-weight: ${weights.black};
  padding-left: 25px;
  padding-top: 25px;
  ${mq.s} {
    padding-left: 15px;
    padding-top: 15px;
  }
`
