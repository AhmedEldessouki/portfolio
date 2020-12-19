/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {FaPen} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import {colors, weights} from '../Styles'
import {useAuth} from '../Utils/AuthProvider'
import PopUp from '../Utils/PopUp/PopUp'
import {deleteProject} from './utils'

const Title = ({name, onClick, children}) => {
  const title = css`
    color: white;
    background-color: ${colors.darkBlue};
    padding: 8% 5%;
    letter-spacing: 1.4px;
    font-size: 1.82rem;
    font-weight: ${weights.medium};
    margin: 0;
    :hover,
    :focus {
      font-weight: ${weights.black};
      color: ${colors.darkBlue};
      background: ${colors.kindaBlue};
    }
  `

  return (
    <button
      type="button"
      onClick={() => {
        onClick()
      }}
      css={css`
        background: transparent;
        border: none;
        width: 100%;
      `}
    >
      <h1 css={title}>{name}</h1>
    </button>
  )
}

function Tags({tags}) {
  return (
    <span
      css={css`
        padding: 10px 20px;
        font-size: 108%;
        color: ${colors.aliceLightBlue};
      `}
    >
      Add Tags
    </span>
  )
}

function EditAndDelete({project, onClick}) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Link
        to={`/edit/${project.id}`}
        onFocus={() => {
          onClick()
        }}
      >
        <FaPen
          css={css`
            color: ${colors.lightBlue};
            font-size: 1.5rem;
            :hover {
              color: ${colors.kindaBlue};
            }
          `}
        />
      </Link>
      <PopUp title="Project" onClick={() => deleteProject(project)} />
    </div>
  )
}

function Card({items, setState}) {
  const {authData, setProject: setPorj} = useAuth()

  const pWrapper = css`
    border-bottom: 10px solid ${colors.darkBlue};
    border-radius: 11%;
    width: 100%;
    :hover,
    :focus {
      border-bottom-color: ${colors.kindaBlue};
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
    <div css={mWrapper}>
      {items?.map(item => {
        return (
          <div css={pWrapper} key={item.id}>
            {authData ? (
              <EditAndDelete project={item} onClick={() => setPorj(item)} />
            ) : null}
            <Title
              name={item.name}
              onClick={() => {
                setState(item)
              }}
            />
            <Tags />
          </div>
        )
      })}
    </div>
  )
}

export default Card
