import { css } from '@emotion/core';

import { colors, mq, weights } from './index';

export const wrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: center;
  min-height: 267px;
  margin: 1% 18%;

  ${mq.xs} {
    flex-direction: column;
  }
`;

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
`;

export const btnStyle = css`
  background-color: ${colors.whiteFaded};
  color: ${colors.independenceBlue};
  font-family: serif;
  font-weight: ${weights.black};
  font-size: 174%;
  width: 300px;
  height: 50px;
  border-radius: 14%;
  border: 0px;
  transition: background-color, color 0.4s steps;
  &:hover,
  :focus {
    color: ${colors.whiteFaded};
    background-color: ${colors.darkBlue};
  }
`;
