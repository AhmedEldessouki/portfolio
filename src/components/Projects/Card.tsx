/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {FaPen} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import {useAuth} from '../../context/AuthProvider'
import {colors} from '../Styles'
import type {Project} from '../Utils/interfaces'
import PopUp from '../Utils/PopUp/PopUp'
import {Title} from '../Utils/util'
import {deleteProject} from './helpers/functions'

function Tag({
  tagUrl,
  ...imageOverrides
}: {tagUrl: string} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      css={css`
        font-size: 108%;
        margin: 0;
      `}
      src={tagUrl}
      alt="tag"
      {...imageOverrides}
    />
  )
}

function EditAndDelete({
  project,
  onClick,
}: {
  project: Project
  onClick: () => any
}) {
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
        data-testid="edit-project"
        onClick={() => {
          onClick()
        }}
      >
        <FaPen
          css={css`
            color: ${colors.blueFont};
            font-size: 1.5rem;
            :hover {
              color: ${colors.kindaBlue};
            }
          `}
        />
      </Link>
      <PopUp info="Project" onClickYes={() => deleteProject(project)} />
    </div>
  )
}

function Card({
  items = [],
  setState,
}: {
  items: Array<Project>
  setState: React.Dispatch<React.SetStateAction<Project | any>>
}) {
  const {user, setProject: setPorj} = useAuth()

  const pWrapper = css`
    border-bottom: 10px solid ${colors.darkBlue};
    border-radius: 11%;
    width: 100%;
    :hover,
    :focus {
      border-bottom-color: ${colors.blueFont};
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
      {items.map((item, i) => {
        return (
          <div css={pWrapper} key={item.id} data-testid={`${item.name}-card`}>
            {user ? (
              <EditAndDelete project={item} onClick={() => setPorj(item)} />
            ) : null}
            <Title
              name={item.name}
              onClick={() => {
                setState(item)
              }}
              aria-pressed="false"
              testId={`project[${i}]`}
            />
            <div
              css={css`
                display: flex;
                place-content: center;
                place-items: center;
                height: 50px;
                gap: 15px;
              `}
            >
              {item.tag &&
                item.tag.map((tag, i) => (
                  <Tag key={`${tag}_${i}`} tagUrl={tag} width="30" />
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
