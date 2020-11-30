/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {Fragment} from 'react'

import {colors, weights} from '../../Styles'

const ProjectsSummary = ({project}) => {
  const forHeader = css`
    color: white;
    background-color: ${colors.darkBlue};
    padding: 8% 5%;
    letter-spacing: 1.4px;
    font-size: 1.82rem;
    font-weight: ${weights.medium};
    :hover,
    :focus {
      color: ${colors.independenceBlue};
      background: ${colors.aliceLightBlue};
    }
  `

  return (
    <Fragment>
      <h1 css={forHeader}>{project.projectName}</h1>
      <span
        css={css`
          padding: 10px 20px;
          font-size: 108%;
          color: ${colors.aliceLightBlue};
        `}
      >
        Add Tags
      </span>
    </Fragment>
  )
}

export default ProjectsSummary
