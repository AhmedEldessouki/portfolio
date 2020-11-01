/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Fragment} from 'react'

import Carousel from '../../Utils/Carousel/Carousel'
import {colors, spinner} from '../../../Styles'

const ProjectDetails = ({project}) => {
  return project ? (
    <Fragment>
      <Carousel imgArray={project.projectLogo} imgAlt={project.projectName} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 10px 50px 33px;
          place-content: center;
          min-height: 241px;
          border-bottom: 24px solid ${colors.darkBlue};
        `}
      >
        <h1
          css={css`
            font-size: 2.75rem;
            font-weight: 900;
            color: #e9f1f7;
            padding-left: 0;
            border-radius: 7.5%;
          `}
        >
          <a href={project.projectLink}>{project.projectName}</a>
        </h1>
        <p
          css={css`
            padding: 0 5%;
            font-size: 1.45rem;
            letter-spacing: 2.4px;
          `}
        >
          {project.description}
        </p>
        <div
          css={css`
            display: flex;
            place-content: space-between;
            font-size: 1.1rem;
            letter-spacing: 1.2px;
            font-variant: all-petite-caps;
          `}
        >
          <span>
            Author: {project.authorFirstName} {project.authorLastName}
          </span>
          <span>
            {/* // ToDo: get date from github */}
            Created At: April 2020
          </span>
        </div>
      </div>
    </Fragment>
  ) : (
    <div
      css={[
        spinner,
        css`
          margin: 50px 0 0;
        `,
      ]}
    />
  )
}

export default ProjectDetails
