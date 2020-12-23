/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useQueryErrorResetBoundary} from 'react-query'

import {h1XL, warning} from '../Styles'
import ProjectDetails from './ProjectDetails'
import Card from './Card'
import OnToggle from '../Utils/OnToggle'

// TODO: add "import {matchSorter} from 'match-sorter'" to sort projects by name, data, or....

const ProjectComponent = ({projectsData}) => {
  const [project, setProject] = React.useState(null)
  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      {project ? (
        <OnToggle items={projectsData} state={project} setState={setProject}>
          <ProjectDetails project={project} />
        </OnToggle>
      ) : (
        <Card items={projectsData} state={project} setState={setProject} />
      )}
    </React.Fragment>
  )
}

function Projects({projectsData, ...props}) {
  const {reset} = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      resetKeys={[projectsData]}
      fallbackRender={({resetErrorBoundary}) => (
        <div type="alert" css={warning}>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      <React.Suspense fallback={'loading'} id={1}>
        <ProjectComponent projectsData={projectsData} {...props} />
      </React.Suspense>
    </ErrorBoundary>
  )
}
export default Projects
