/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'

import PopUp from '../Utils/PopUp/PopUp'
import {db} from '../Utils/firebase'
import {useAuth} from '../Utils/AuthProvider'
import {btnStyle, colors, h1XL} from '../Styles'
import ProjectDetails from './ProjectDetails'
import ProjectsSummary from './ProjectsSummary'
import {deleteProject} from './utils'
import {useQuery} from 'react-query'

const Projects = () => {
  const {authData, setProject: setPorj} = useAuth()
  const [project, setProject] = React.useState(null)
  const {status, error, data: projectsData} = useQuery({
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
          err => err,
        ),
  })

  if (status === 'loading') return 'loading'
  if (error) throw error.message

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

  return !project ? (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      <div css={mWrapper}>
        {projectsData?.map(project => {
          return (
            <div css={pWrapper} key={project.id}>
              {authData ? (
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  `}
                >
                  <Link
                    to={`/edit/${project.id}`}
                    onFocus={() => setPorj(project)}
                  >
                    <FaPen
                      style={{color: colors.lightBlue, fontSize: '1.5rem'}}
                    />
                  </Link>
                  <PopUp
                    project={project}
                    title="Project"
                    fn={() => deleteProject(project)}
                  />
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => setProject(project)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  width: '100%',
                }}
              >
                <ProjectsSummary project={project} />
              </button>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <button css={btnStyle} onClick={() => setProject(null)} type="button">
        Back
      </button>
      <ProjectDetails project={project} />
    </React.Fragment>
  )
}
// const Projects = React.memo(ProjectsX)
export default Projects