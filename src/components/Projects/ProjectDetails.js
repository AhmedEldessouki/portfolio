/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'

import Carousel from '../Utils/Carousel/Carousel'
import {colors, spinner} from '../Styles'

function ProjectDetails({project}) {
  const [description, setDescription] = React.useState(project.description)

  React.useEffect(() => {
    if (description !== project.description) setDescription(project.description)
  }, [description, project.description])

  return project ? (
    <React.Fragment>
      {project.projectLogo.length !== 0 ? (
        <Carousel imgArray={project.projectLogo} imgAlt={project.name} />
      ) : null}
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
          <a href={project.link}>{project.name}</a>
        </h1>
        <textarea
          disabled
          rows="5"
          wrap="hard"
          maxLength={description.length}
          css={css`
            resize: none;
            place-self: center;
            padding: 10px 1%;
            font-size: 1.45rem;
            letter-spacing: 0.4px;
            background: ${colors.independenceBlue};
            color: ${colors.lightBlue};
            border: 5px solid ${colors.darkBlue};
            margin-bottom: 23.2px;
            min-width: 80%;
            border-radius: 5%;
          `}
          value={description}
        />
        <div
          css={css`
            display: flex;
            place-content: space-between;
            font-size: 1.1rem;
            letter-spacing: 1.2px;
            font-variant: all-petite-caps;
          `}
        >
          {project.updatedOn ? (
            <span>
              Last Update: {project.updatedOn.toDate().toDateString()}
            </span>
          ) : null}
          <span>
            {/* // ToDo: get date from github */}
            Added On: {project.date.toDate().toDateString()}
          </span>
        </div>
      </div>
    </React.Fragment>
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
