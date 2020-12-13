/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useErrorResetBoundary, useQuery} from 'react-query'

import {db} from '../Utils/firebase'
import {h1XL, warning} from '../Styles'
import ProjectDetails from './ProjectDetails'
import {Dialog, OnToggle} from './ProjectsSummary'

const ProjectComponent = () => {
  const [project, setProject] = React.useState(null)
  const {data: projectsData} = useQuery({
    queryKey: 'projects',
    queryFn: async () =>
      await db
        .collection('projects')
        .get()
        .then(
          querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id}
            })
            return data
          },
          err => {
            throw err
          },
        ),
    config: {
      onError: err => {
        throw err
      },
      placeholderData: [
        {
          id: 'RXKmlQIDg7TFPyNmejMB',
          projectName: 'XXXXXXX',
          projectLink: 'https://XXXX-XXX.XXX.XXX/',
          description: 'XXXXXXXXXXXXXXXXXXXX',
          projectLogo: [],
          createdAt: {
            seconds: 1599235638,
            nanoseconds: 137000000,
          },
        },
      ],
    },
  })

  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      {project ? (
        <OnToggle items={projectsData} state={project} setState={setProject}>
          <ProjectDetails project={project} />
        </OnToggle>
      ) : (
        <Dialog items={projectsData} state={project} setState={setProject} />
      )}
    </React.Fragment>
  )
}

function Projects(props) {
  const {reset} = useErrorResetBoundary()
  return (
    <React.Suspense fallback={'loading'} id={1}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({resetErrorBoundary}) => (
          <div type="alert" css={warning}>
            There was an error!
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        <ProjectComponent {...props} />
      </ErrorBoundary>
    </React.Suspense>
  )
}
export default Projects
