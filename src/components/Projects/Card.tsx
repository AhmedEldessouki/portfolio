/* eslint-disable react/jsx-props-no-spreading */
/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {FaPen} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import {useAuth} from '../../context/AuthProvider'
import {colors} from '../../Styles'
import {deleteProject} from '../../Utils/apis'
import replaceWhiteSpaceWith from '../../Utils/helpers'
import type {ProjectInterface, ProjectTypeType} from '../../../types/interfaces'
import PopUp from '../PopUp/PopUp'
import Title from '../Title'
import ImgWithFallback from '../Image'

// TODO A11y switch to object to place name on image's alt
function Tag({
  tagUrl,
  ...imageOverrides
}: {tagUrl: string} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <li>
      <ImgWithFallback
        css={css`
          font-size: 108%;
          margin: 0;
        `}
        height="30"
        width="30"
        fallback="/icons/apple-icon-180.png"
        src={tagUrl}
        alt="tag"
        {...imageOverrides}
      />
    </li>
  )
}

function EditAndDelete({
  project,
  onClick,
}: {
  project: ProjectInterface
  onClick: () => void
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
        aria-label={`edit ${project.name} project`}
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
      <PopUp
        info="Project"
        onClickYes={() => deleteProject(project)}
        controls={replaceWhiteSpaceWith(project.name ?? '')}
      />
    </div>
  )
}

function ProjectType({projType}: {projType: ProjectTypeType}) {
  const [hovered, setHover] = React.useState(false)
  return (
    <div
      css={{
        display: 'flex',
        placeContent: 'flex-end',
      }}
    >
      <span
        onMouseEnter={() => setHover(!hovered)}
        onMouseLeave={() => setHover(!hovered)}
        onFocus={() => setHover(!hovered)}
        onBlur={() => setHover(!hovered)}
        aria-label={projType ?? 'personal'}
        css={{
          borderRadius: 50,
          border: `1px solid`,
          borderColor:
            projType === 'Contribution' ? 'orange' : colors.lightGreen,
          color: projType === 'Contribution' ? 'orange' : colors.lightGreen,
          textAlign: 'center',
          fontSize: hovered ? '0.95rem' : '1rem',
          width: 24,
          height: 24,
          transition: 'width 0.3s ease-in-out',
          marginBottom: 9,
          overflow: 'hidden',
          cursor: 'help',
          ':hover, :focus': {
            padding: '0 8px',
            width: projType === 'Contribution' ? '110px' : '83px',
          },
        }}
      >
        {hovered ? projType : '!'}
      </span>
    </div>
  )
}

const pWrapper = css`
  border-bottom: 10px solid ${colors.darkBlue};
  border-radius: 11%;
  width: 100%;
  padding: 0;
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

function Card({
  items = [],
  setState,
}: {
  items: Array<ProjectInterface>
  setState: React.Dispatch<React.SetStateAction<ProjectInterface | unknown>>
}) {
  const {user, setProject: setPorj} = useAuth()

  return (
    <section>
      <ul css={mWrapper}>
        {items.map((item, i) => (
          <li
            css={pWrapper}
            key={item.id}
            data-testid={`${item.name}-card`}
            aria-label="project list"
          >
            {user ? (
              <EditAndDelete project={item} onClick={() => setPorj(item)} />
            ) : null}
            <ProjectType projType={item.projectType} />
            <ul css={{padding: 0}}>
              <Title
                name={item.name}
                onClick={() => {
                  setState(item)
                }}
                testId={`project[${i}]`}
              />
            </ul>
            <ul
              css={css`
                display: flex;
                place-content: center;
                place-items: center;
                height: 50px;
                gap: 15px;
                margin-bottom: 0px;
                padding-left: 0;
              `}
            >
              {/* TODO: Add alt Later After Changing all Tags of ProjectData to an object */}
              {item.tag?.map((tag, index) => {
                const url = typeof tag === 'object' ? tag.url : tag
                // eslint-disable-next-line react/no-array-index-key
                return <Tag key={`${url}_${index}`} tagUrl={url} width="30" />
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Card
