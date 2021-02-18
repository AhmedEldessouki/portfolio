/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL, weights} from '../../Styles'
import OnToggle from '../OnToggle'
import ErrorMessageFallback from '../ErrorMessageFallback'
import type {Project} from '../../../types/interfaces'
import {useSafeDispatch} from '../../Utils/hooks'
import {deepEqual} from '../../Utils/deepEqual'
import Card from './Card'
import ProjectView from './ProjectView'

// Note: Projects & Payload will never be undefined... need to dig deeper into to this later
interface ReducerState {
  sortedBy: 'alphabet' | 'none' | 'no_sorting'
  projects: Array<Project> | undefined
}
interface ReducerAction {
  type: 'none' | 'alphabet' | 'reset_sort'
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
  const dispatch = useSafeDispatch<'alphabet' | 'reset_sort', Array<Project>>(
    dispatchUnsafe,
  )

  React.useEffect(() => {
    moveFocus()
  }, [displayProject])

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
  if (!projectsData) {
    return (
      <p role="alert">
        Ooops Something is not right{' '}
        <span role="img" aria-label="Exploding head">
          🤯🤯
        </span>
      </p>
    )
  }
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
          </section>
          <Card items={projects ?? projectsData} setState={setDisplayProject} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

const Projects = React.memo(
  ({projectsData}: {projectsData: Array<Project>}) => {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorMessageFallback}
        resetKeys={[projectsData]}
      >
        <ProjectComponent projectsData={projectsData} />
      </ErrorBoundary>
    )
  },
  (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps)
  },
)

export default Projects
