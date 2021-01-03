/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {btnStyle, colors, h1XL, weights} from '../Styles'
import ProjectDetails from './ProjectDetails'
import Card from './Card'
import OnToggle from '../Utils/OnToggle'
import {ErrorMessage} from '../Utils/util'
// TODO: add "import {matchSorter} from 'match-sorter'" to sort projects by name, data, or....

function ProjectComponent({projectsData}) {
  const [project, setProject] = React.useState(null)
  const selectedRef = React.useRef()

  const moveFocus = () => selectedRef.current?.moveFocus()

  const reducer = (state, value) => {
    switch (value) {
      case 'alphabet':
        return {
          projects: [
            ...projectsData.sort(function (a, b) {
              return a.name.localeCompare(b.name)
            }),
          ],
          sorted: value,
        }

      case 'date':
        return {
          projects: [
            ...projectsData.sort(function (a, b) {
              let x = new Date(a.date),
                y = new Date(b.date)
              return x - y
            }),
          ],
          sorted: value,
        }
      case 'reverse_date':
        return {
          projects: [
            ...projectsData.sort(function (a, b) {
              let x = new Date(a.date),
                y = new Date(b.date)
              return x - y
            }),
          ].reverse(),
          sorted: value,
        }

      default:
        return state
    }
    //  return dispatch(projectsData)
  }
  const [{sorted, projects}, dispatch] = React.useReducer(reducer, {
    status: null,
    sorted: '',
  })

  React.useEffect(() => {
    moveFocus()
  }, [project])

  const btn = {
    borderRadius: '11%',
    border: 'none',
    background: colors.darkBlue,
    color: colors.whiteFaded,
    cursor: 'pointer',
  }

  return (
    <>
      <h1 css={h1XL}>Projects</h1>
      {project ? (
        <OnToggle
          items={projects ?? projectsData}
          selected={project}
          setSelected={setProject}
          ref={selectedRef}
        >
          <ProjectDetails project={project} />
        </OnToggle>
      ) : (
        <>
          <div
            css={{
              display: 'flex',
              gap: '10px',
              placeContent: 'flex-end',
              paddingRight: '25px',
              background: colors.backgroundShade,
              padding: '10px 25px 10px 0',
            }}
          >
            <span
              css={{
                fontFamily: 'sans',
                letterSpacing: '1.5px',
                fontSize: '1.3rem',
                fontWeight: weights.black,
              }}
            >
              Filter
            </span>
            <button
              type="button"
              css={[
                btn,
                sorted === 'alphabet'
                  ? {
                      background: colors.blueFont,
                      cursor: 'no-drop',
                    }
                  : {
                      ':hover': {
                        opacity: 0.8,
                        transform: 'scale(1.1)',
                      },
                    },
              ]}
              disable={sorted === 'alphabet'}
              onClick={() => {
                dispatch('alphabet')
              }}
            >
              Name
            </button>
            <button
              type="button"
              css={[
                btn,
                sorted === 'date'
                  ? {
                      background: colors.blueFont,
                      cursor: 'no-drop',
                    }
                  : {
                      ':hover': {
                        opacity: 0.8,
                        transform: 'scale(1.1)',
                      },
                    },
              ]}
              disable={sorted === 'date'}
              onClick={() => {
                dispatch('date')
              }}
            >
              Oldest
            </button>
            <button
              type="button"
              css={[
                btn,
                sorted === 'reverse_date'
                  ? {
                      background: colors.blueFont,
                      cursor: 'no-drop',
                    }
                  : {
                      ':hover': {
                        opacity: 0.8,
                        transform: 'scale(1.1)',
                      },
                    },
              ]}
              disable={sorted === 'reverse_date'}
              onClick={() => {
                dispatch('reverse_date')
              }}
            >
              Latest
            </button>
          </div>
          <Card
            items={projects ?? projectsData}
            state={project}
            setState={setProject}
          />
        </>
      )}
    </>
  )
}

function Projects({projectsData}) {
  return (
    <ErrorBoundary resetKeys={[projectsData]} fallback={<ErrorMessage />}>
      <ProjectComponent projectsData={projectsData} />
    </ErrorBoundary>
  )
}
export default Projects
