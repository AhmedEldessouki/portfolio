/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useErrorResetBoundary, useQuery} from 'react-query'

import {db} from '../Utils/firebase'
import {useAuth} from '../Utils/AuthProvider'
import {btnStyle, colors, h1XL, warning} from '../Styles'
import ProjectDetails from './ProjectDetails'
import {Tags, Title} from './ProjectsSummary'
import {EditAndDelete} from './utils'

const ProjectComponent = () => {
  const {authData, setProject: setPorj} = useAuth()
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

  const pWrapper = css`
    border-bottom: 10px solid ${colors.darkBlue};
    border-radius: 11%;
    width: 100%;
    :hover,
    :focus {
      border-bottom-color: ${colors.aliceLightBlue};
    }
  `
  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(231px, 264px));
  `

  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      <div css={mWrapper}>
        {projectsData?.map(project => {
          return (
            <div css={pWrapper} key={project.id}>
              {authData ? (
                <EditAndDelete
                  project={project}
                  onClick={() => setPorj(project)}
                />
              ) : null}
              <Title
                name={project.projectName}
                onClick={() => setProject(project)}
              >
                <Tags />
              </Title>
            </div>
          )
        })}
      </div>
      {project ? (
        <React.Fragment>
          <button css={btnStyle} onClick={() => setProject(null)} type="button">
            Back
          </button>
          <ProjectDetails project={project} />
        </React.Fragment>
      ) : null}
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
