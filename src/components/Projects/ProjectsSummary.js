/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
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
      color: ${colors.independenceBlue};
      background: ${colors.aliceLightBlue};
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
        <FaPen style={{color: colors.lightBlue, fontSize: '1.5rem'}} />
      </Link>
      <PopUp title="Project" onClick={() => deleteProject(project)} />
    </div>
  )
}

function Dialog({items, setState}) {
  const {authData, setProject: setPorj} = useAuth()

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
    <div css={mWrapper}>
      {items?.map(item => {
        return (
          <div css={pWrapper} key={item.id}>
            {authData ? (
              <EditAndDelete project={item} onClick={() => setPorj(item)} />
            ) : null}
            <Title
              name={item.projectName}
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

function OnToggle({items, setState, children}) {
  const [show, setShow] = React.useState(() => {
    if (window.innerWidth >= 1220) {
      return {min: 0, max: 3, range: 4}
    } else if (window.innerWidth >= 900) {
      return {min: 0, max: 2, range: 3}
    } else if (window.innerWidth >= 480) {
      return {min: 0, max: 1, range: 2}
    }
  })

  return (
    <div>
      <div
        css={css`
          display: flex;
          place-content: end;
        `}
      >
        <button
          css={css`
            background: ${colors.darkBlue};
            color: ${colors.aliceLightBlue};
            border: 5px solid ${colors.darkBlue};
            font-size: 1.2rem;
            font-weight: bolder;
            :hover {
              background: ${colors.kindaDarkBlue};
              color: ${colors.darkBlue};
            }
          `}
          onClick={() => setState(null)}
        >
          X
        </button>
      </div>
      <div
        css={css`
          display: flex;
          margin: 0 23px;
          margin: 0 23px;
          border-top: 22px solid ${colors.darkBlue};
          padding: 21px 0;
          border-radius: 13%;
          border-bottom: 22px solid ${colors.darkBlue};
          place-items: center;
          place-content: space-between;
          margin-bottom: 16px;
        `}
      >
        <button
          onClick={() => {
            if (show.min !== 0) {
              setShow({...show, min: show.min - 1, max: show.max - 1})
            }
          }}
          type="button"
          css={css`
            background: ${colors.darkBlue};
            height: 50px;
            width: 25px;
            border-radius: 23px 0 0 24px;
            border: 5px solid ${colors.darkBlue};
            :hover {
              background: ${colors.kindaDarkBlue};
            }
          `}
        />
        {items?.map((item, i) => {
          if (i >= show.min && i <= show.max) {
            return (
              <div
                css={css`
                  min-width: 23%;
                  margin-bottom: 0;
                `}
                key={item.id}
              >
                <Title
                  name={item.projectName}
                  onClick={() => {
                    setState(item)
                  }}
                />
              </div>
            )
          } else {
            return null
          }
        })}
        <button
          onClick={() => {
            if (show.max !== items.length - 1) {
              console.log(show, items.length)
              setShow({...show, max: show.max + 1, min: show.min + 1})
            }
          }}
          type="button"
          css={css`
            background: ${colors.darkBlue};
            height: 50px;
            width: 25px;
            border-radius: 0 23px 24px 0;
            border: 5px solid ${colors.darkBlue};
            :hover {
              background: ${colors.kindaDarkBlue};
            }
          `}
        />
      </div>
      {children}
    </div>
  )
}

export {Title, Tags, Dialog, OnToggle}
