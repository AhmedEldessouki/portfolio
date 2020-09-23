/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Fragment} from 'react'

import {h1XL} from '../../../Styles'

import ProjectsSummary from './ProjectsSummary'

const Projects = ({projectsData}) => {
  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(231px, 264px));
  `
  return (
    <Fragment>
      <h1 css={h1XL}>My Projects</h1>
      <div css={mWrapper}>
        {projectsData &&
          projectsData.map(project => {
            return (
              <ProjectsSummary
                project={project}
                to={`/projects/${project.id}`}
                key={project.id}
              />
            )
          })}
      </div>
    </Fragment>
  )
}

export default Projects
