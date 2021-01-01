import {css} from '@emotion/react'

import {colors, mq, weights} from './index'

export const wrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: center;
  min-height: 267px;
  padding: 5px 100px 25px;
  ${mq.desktop} {
    flex-direction: column;
    flex-wrap: nowrap;
    place-items: center;
  }
  ${mq.s} {
    padding: 1% 0;
    margin: 0;
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
  border: double 10px ${colors.aliceLightBlue};
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
    transform: scale(98%);
    opacity: 0.9;
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
  ${mq.desktop} {
    width: 530px;
  }
  ${mq.phoneLarge} {
    width: 407px;
  }
  ${mq.s} {
    transform: scale(0.7);
  }
`

export const signWrapperInput = css`
  padding: 8px;
  width: 98%;
  height: 30px;
  background-color: transparent;
  color: ${colors.aliceLightBlue};
  border: 5.5px solid ${colors.darkBlue};
  border-radius: 7%;
  letter-spacing: 2.2px;

  ${mq.desktop} {
    height: 50px;
  }
  ${mq.phoneLarge} {
    height: 30px;
  }
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
  padding-right: 25px;
  font-size: 1.4rem;

  ${mq.desktop} {
    width: 500px;
    font-size: 2rem;
  }
  ${mq.phoneLarge} {
    width: calc(407px - 30px);
    font-size: 1.345rem;
  }
  ${mq.s} {
    width: 332px;
  }
`

export const textArea = css`
  width: 98%;
  height: calc(100% - 14px);
  padding: 8px;
  padding-bottom: 0;
  color: ${colors.aliceLightBlue};
  border: 5px solid ${colors.darkBlue};
  border-radius: 7%;
  background-color: transparent;
  margin-left: 10px;
  letter-spacing: 1.2px;

  ${mq.desktop} {
    margin-left: 0;
    height: 188px;
  }
  ${mq.phoneLarge} {
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
export const h2XL = css`
  font-size: 170%;
  width: 96%;
  text-align: center;
  font-family: serif;
  font-weight: ${weights.bold};
  padding-left: 28px;
  padding-top: 15px;
  font-style: italic;
  margin-bottom: 10px;
  ${mq.s} {
    padding-left: 18px;
    padding-top: 10px;
  }
`
