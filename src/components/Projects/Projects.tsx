/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL, weights} from '../Styles'
import ProjectView from './ProjectView'
import Card from './Card'
import OnToggle from '../Utils/OnToggle'
import {ErrorMessageFallback} from '../Utils/util'
import type {Project} from '../Utils/interfaces'
import {useSafeDispatch} from '../Utils/hooks'

// Note: Projects & Payload will never be undefined... need to dig deeper into to this later
interface ReducerState {
  sortedBy: 'reverse_date' | 'date' | 'alphabet' | 'none'
  projects: Array<Project> | undefined
}
interface ReducerAction {
  type: 'reverse_date' | 'date' | 'alphabet'
  payload?: Array<Project>
}

const reducer = (state: ReducerState, action: ReducerAction) => {
  const {type, payload} = action
  switch (type) {
    case 'alphabet': {
      state.projects = payload && [
        ...payload.sort(function (a, b) {
          return a.name.localeCompare(b.name)
        }),
      ]
      state.sortedBy = 'alphabet'
      return {
        ...state,
      }
    }
    case 'date': {
      state.projects = payload && [
        ...payload.sort(function (a, b) {
          let x = new Date(a.date) as any,
            y = new Date(b.date) as any
          return x - y
        }),
      ]
      state.sortedBy = 'date'
      return {
        ...state,
      }
    }
    case 'reverse_date': {
      state.projects =
        payload &&
        [
          ...payload.sort(function (a, b) {
            let x = new Date(a.date) as any,
              y = new Date(b.date) as any
            return x - y
          }),
        ].reverse()
      state.sortedBy = 'reverse_date'
      return {
        ...state,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type} in Project_Component`)
    }
  }
}

function ProjectComponent({projectsData}: {projectsData: Array<Project>}) {
  // Its set to any Even thu It can be either Project | undefined but the OnToggle component expects Message to be assigned
  const [displayProject, setDisplayProject] = React.useState<Project | any>()
  const selectedRef = React.useRef<any>()

  const moveFocus = () => selectedRef.current?.moveFocus()

  const [state, dispatchUnsafe] = React.useReducer(reducer, {
    sortedBy: 'none',
    projects: undefined,
  })
  const dispatch = useSafeDispatch<
    'reverse_date' | 'date' | 'alphabet',
    Array<Project>
  >(dispatchUnsafe)

  React.useEffect(() => {
    moveFocus()
  }, [displayProject])

  const btn = {
    borderRadius: '11%',
    border: 'none',
    background: colors.darkBlue,
    color: colors.whiteFaded,
    cursor: 'pointer',
  }
  const {sortedBy, projects} = state
  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      {displayProject ? (
        <OnToggle
          items={projects ?? projectsData}
          displayedData={displayProject}
          setDisplayData={setDisplayProject}
          ref={selectedRef}
        >
          <ProjectView project={displayProject} />
        </OnToggle>
      ) : (
        <React.Fragment>
          <section
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
              data-testid="sort_by_name"
              css={[
                btn,
                sortedBy === 'alphabet'
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
              disabled={sortedBy === 'alphabet'}
              onClick={() => {
                dispatch({type: 'alphabet', payload: projectsData})
              }}
            >
              Name
            </button>
            <button
              type="button"
              data-testid="sort_by_date"
              css={[
                btn,
                sortedBy === 'date'
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
              disabled={sortedBy === 'date'}
              onClick={() => {
                dispatch({type: 'date', payload: projectsData})
              }}
            >
              Oldest
            </button>
            <button
              type="button"
              data-testid="sort_by_date_reverse"
              css={[
                btn,
                sortedBy === 'reverse_date'
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
              disabled={sortedBy === 'reverse_date'}
              onClick={() => {
                dispatch({type: 'reverse_date', payload: projectsData})
              }}
            >
              Latest
            </button>
          </section>
          <Card items={projects ?? projectsData} setState={setDisplayProject} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

function Projects({projectsData}: {projectsData: Array<Project>}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorMessageFallback}
      resetKeys={[projectsData]}
    >
      <ProjectComponent projectsData={projectsData} />
    </ErrorBoundary>
  )
}

export default Projects
