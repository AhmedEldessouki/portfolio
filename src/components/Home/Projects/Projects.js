/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Fragment, useState} from 'react'

import {btnStyle, h1XL} from '../../../Styles'
import ProjectDetails from './ProjectDetails'
import ProjectsSummary from './ProjectsSummary'

const Projects = ({projectsData}) => {
  const [project, setProject] = useState(null)
  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(231px, 264px));
  `
  return !project ? (
    <Fragment>
      <h1 css={h1XL}>My Projects</h1>
      <div css={mWrapper}>
        {projectsData?.map(project => {
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setProject(project)}
              style={{background: 'transparent', border: 'none'}}
            >
              <ProjectsSummary project={project} />
            </button>
          )
        })}
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <button css={btnStyle} onClick={() => setProject(null)} type="button">
        Back
      </button>
      <ProjectDetails project={project} />
    </Fragment>
  )
}

export default Projects
