/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {useAuth} from '../../context/AuthProvider'
import {colors} from '../../Styles'
import type {Project} from '../../../types/interfaces'
import Title from '../Title'
import ProjectType from './ProjectType'
import Tag from './Tag'
import EditAndDelete from './EditAndDelete'

function Card({
  items = [],
  setState,
}: {
  items: Array<Project>
  setState: React.Dispatch<React.SetStateAction<Project | unknown>>
}) {
  const {user, setProject: setPorj} = useAuth()

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
  return (
    <section>
      <ul css={mWrapper}>
        {items.map((item, i) => {
          return (
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
                  return <Tag key={`${url}_${index}`} tagUrl={url} width="30" />
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Card
