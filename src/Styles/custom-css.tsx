import {css} from '@emotion/react'

import {colors, mq, weights} from './index'

export const wrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: center;
  gap: 10px;
  min-height: 267px;
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
  color: ${colors.independenceBlue};
  font-weight: ${weights.black};
  font-size: 126%;
  width: 300px;
  margin: 20px 0;
  height: 50px;
  border-radius: 14%;
  border: none;
  background: linear-gradient(to right top, #b3bff4, #8795e0);
  transition: background-color, color 0.4s steps;
  :hover,
  :focus {
    opacity: 0.9;
  }
`

export const formStyles = css`
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
    width: 95%;
  }
`

export const inputStyles = css`
  padding: 0 8px;
  width: calc(100% - 26px);
  height: 50px;
  background-color: transparent;
  color: ${colors.aliceLightBlue};
  border: 5px solid #6572a9;
  outline: none;
  letter-spacing: 2.2px;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to right top, #6572a9, #6873ad);
  ::placeholder {
    color: rgb(241, 241, 241);
  }
  &:valid{
    border-image-source: linear-gradient(to right, #1CA195, ${colors.lightGreen});
  }
  :focus-within {
    :invalid {
        outline: none;
      border-image-source: linear-gradient(
        to right,
        #9f1919 ,
        ${colors.burgundyRed}
        );
      }
    }
  }
  `

export const warning = css`
  transition: all 500ms;
  color: ${colors.red};
  padding-left: 16px;
  padding-bottom: 2px;
`

export const labelWrapper = css`
  display: block;
  font-size: 1.4rem;
  width: 100%;
  }
`

export const textArea = css`
  width: calc(100% - 16px);
  height: 168px;
  padding: 8px;
  color: ${colors.aliceLightBlue};
  border: 5px solid #6572a9;
  outline: none;
  background-color: transparent;
  letter-spacing: 1.2px;
  ${mq.desktop} {
    height: 188px;
    width: calc(100% - 25px);
  }
  ${mq.phoneLarge} {
    height: 124px;
  }
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to right top, #6572a9, #6873ad);
  ::placeholder {
    color: rgb(241, 241, 241);
  }
  :valid {
    border-image-source: linear-gradient(
      to right,
      #1ca195,
      ${colors.lightGreen}
    );
  }
  :focus-within {
    :invalid {
      outline: none;
      border-image-source: linear-gradient(
        to right,
        #9f1919,
        ${colors.burgundyRed}
      );
    }
  }
  transition: all 500ms ease;
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
