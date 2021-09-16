/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL, weights} from '../../Styles'
import OnToggle from '../OnToggle'
import ErrorMessageFallback from '../ErrorMessageFallback'
import type {ProjectInterface} from '../../../types/interfaces'
import {useSafeDispatch} from '../../Utils/hooks'
import Card from './Card'
import ProjectView from './ProjectView'

// Note: Projects & Payload will never be undefined... need to dig deeper into to this later
interface ReducerState {
  sortedBy: 'reverse_date' | 'date' | 'alphabet' | 'none' | 'no_sorting'
  projects: Array<ProjectInterface> | undefined
}
interface ReducerAction {
  type: 'reverse_date' | 'none' | 'date' | 'alphabet' | 'reset_sort'
  payload?: Array<ProjectInterface>
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  const {type, payload} = action
  switch (type) {
    case 'none': {
      return {
        ...state,
        sortedBy: 'none',
        projects: payload && [...payload],
      }
    }
    case 'reset_sort': {
      return {
        ...state,
        sortedBy: 'no_sorting',
        projects: payload && [...payload],
      }
    }
    case 'alphabet': {
      return {
        ...state,
        sortedBy: 'alphabet',
        projects: payload && [...payload],
      }
    }
    case 'date': {
      return {
        ...state,
        sortedBy: 'date',
        projects: payload && [...payload],
      }
    }
    case 'reverse_date': {
      return {
        ...state,
        sortedBy: 'reverse_date',
        projects: payload && [...payload],
      }
    }
    default: {
      return state
    }
  }
}

function ProjectComponent({
  projectsData,
}: {
  projectsData: Array<ProjectInterface>
}) {
  // Its set to any Even thu It can be either Project | undefined but the OnToggle component expects Message to be assigned
  const [displayProject, setDisplayProject] = React.useState<
    ProjectInterface | unknown | undefined
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
    Array<ProjectInterface>
  >(dispatchUnsafe)

  React.useEffect(() => {
    moveFocus()
  }, [displayProject])

  const sortDate = (a: ProjectInterface, b: ProjectInterface) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const x = new Date(a.date as Date) as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const y = new Date(b.date as Date) as any
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
          displayedData={displayProject as ProjectInterface}
          setDisplayData={setDisplayProject}
          ref={selectedRef}
        >
          <ProjectView project={displayProject as ProjectInterface} />
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
                if (!projects) return
                if (sortedBy === 'alphabet') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'alphabet',
                    payload: projects.sort(
                      (a: typeof projects[0], b: typeof projects[0]) =>
                        a.name.localeCompare(b.name),
                    ),
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
                if (!projects) return
                if (sortedBy === 'date') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'date',
                    payload: projects.sort(sortDate),
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
                if (!projects) return
                if (sortedBy === 'reverse_date') {
                  dispatch({type: 'reset_sort', payload: projectsData})
                } else {
                  dispatch({
                    type: 'reverse_date',
                    payload: projects.sort(sortDate).reverse(),
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

const Projects = React.memo(
  ({projectsData}: {projectsData: Array<ProjectInterface>}) => (
    <ErrorBoundary
      FallbackComponent={ErrorMessageFallback}
      resetKeys={[projectsData]}
    >
      <ProjectComponent projectsData={projectsData} />
    </ErrorBoundary>
  ),
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps),
)

export default Projects
