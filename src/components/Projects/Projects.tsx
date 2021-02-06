/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL, weights} from '../Styles'
import OnToggle from '../Utils/OnToggle'
import {ErrorMessageFallback} from '../Utils/util'
import type {Project} from '../Utils/interfaces'
import {useSafeDispatch} from '../Utils/hooks'
import Card from './Card'
import ProjectView from './ProjectView'

// Note: Projects & Payload will never be undefined... need to dig deeper into to this later
interface ReducerState {
  sortedBy: 'reverse_date' | 'date' | 'alphabet' | 'none' | 'no_sorting'
  projects: Array<Project> | undefined
}
interface ReducerAction {
  type: 'reverse_date' | 'none' | 'date' | 'alphabet' | 'reset_sort'
  payload?: Array<Project>
}

const reducer = (state: ReducerState, action: ReducerAction) => {
  const {type, payload} = action
  switch (type) {
    case 'none': {
      state.projects = payload && [...payload]
      state.sortedBy = 'none'
      return {
        ...state,
      }
    }
    case 'reset_sort': {
      state.projects = payload && [...payload]
      state.sortedBy = 'no_sorting'
      return {
        ...state,
      }
    }
    case 'alphabet': {
      state.projects = payload && [...payload]
      state.sortedBy = 'alphabet'
      return {
        ...state,
      }
    }
    case 'date': {
      state.projects = payload && [...payload]
      state.sortedBy = 'date'
      return {
        ...state,
      }
    }
    case 'reverse_date': {
      state.projects = payload && [...payload]
      state.sortedBy = 'reverse_date'
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

function ProjectComponent({projectsData}: {projectsData: Array<Project>}) {
  // Its set to any Even thu It can be either Project | undefined but the OnToggle component expects Message to be assigned
  const [displayProject, setDisplayProject] = React.useState<
    Project | unknown | undefined
  >()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedRef = React.useRef<any>()

  const moveFocus = () => selectedRef.current?.moveFocus()

  const [state, dispatchUnsafe] = React.useReducer(reducer, {
    sortedBy: 'none',
    projects: undefined,
  })
  const dispatch = useSafeDispatch<
    'reverse_date' | 'date' | 'alphabet' | 'reset_sort',
    Array<Project>
  >(dispatchUnsafe)

  React.useEffect(() => {
    moveFocus()
  }, [displayProject])

  const sortDate = (a: Project, b: Project) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const x = new Date(a.date) as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const y = new Date(b.date) as any
    return x - y
  }
  const btn = {
    borderRadius: '11%',
    border: 'none',
    background: colors.darkBlue,
    color: colors.whiteFaded,
    cursor: 'pointer',
    ':hover': {
      opacity: 0.8,
      transform: 'scale(1.1)',
    },
  }
  const btnHasFocus = {
    opacity: 0.8,
    transform: 'scale(1.1)',
  }
  const {sortedBy, projects} = state
  return (
    <React.Fragment>
      <h1 css={h1XL}>Projects</h1>
      {displayProject ? (
        <OnToggle
          items={projects ?? projectsData}
          displayedData={displayProject as Project}
          setDisplayData={setDisplayProject}
          ref={selectedRef}
        >
          <ProjectView project={displayProject as Project} />
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
            onMouseEnter={() => {
              if (sortedBy === 'none') {
                dispatch({type: 'reset_sort', payload: projectsData})
              }
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
              css={[btn, sortedBy === 'alphabet' ? btnHasFocus : null]}
              onClick={() => {
                if (sortedBy === 'alphabet') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'alphabet',
                    payload: projects?.sort((a, b) => {
                      return a.name.localeCompare(b.name)
                    }),
                  })
                }
              }}
            >
              Name
            </button>
            <button
              type="button"
              data-testid="sort_by_date"
              css={[btn, sortedBy === 'date' ? btnHasFocus : null]}
              onClick={() => {
                if (sortedBy === 'date') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'date',
                    payload: projects?.sort(sortDate),
                  })
                }
              }}
            >
              Oldest
            </button>
            <button
              type="button"
              data-testid="sort_by_date_reverse"
              css={[btn, sortedBy === 'reverse_date' ? btnHasFocus : null]}
              onClick={() => {
                if (sortedBy === 'reverse_date') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'reverse_date',
                    payload: projects?.sort(sortDate).reverse(),
                  })
                }
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
