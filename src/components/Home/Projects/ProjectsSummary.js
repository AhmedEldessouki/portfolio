/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'

import PopUp from '../../Utils/PopUp/PopUp'
import {colors, weights} from '../../../Styles'

const ProjectsSummary = ({project, to, xyz}) => {
  const [auth, setAuth] = useState(false)

  const pWrapper = css`
    border-bottom: 10px solid ${colors.darkBlue};
    border-radius: 11%;
    :hover,
    :focus {
      border-bottom-color: ${colors.aliceLightBlue};
    }
  `
  const forHeader = css`
    color: white;
    background-color: ${colors.darkBlue};
    padding: 8% 5%;
    letter-spacing: 1.4px;
    font-size: 1.82rem;
    font-weight: ${weights.medium};
    :hover,
    :focus {
      color: ${colors.independenceBlue};
      background: ${colors.aliceLightBlue};
    }
  `

  return (
    <div css={pWrapper}>
      {auth ? (
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <NavLink to={`/edit/${project.id}`} key={project}>
            <FaPen style={{color: colors.lightBlue, fontSize: '1.5rem'}} />
          </NavLink>
          <PopUp project={project} title="Project" />
        </div>
      ) : null}
      <NavLink to={to} key={xyz}>
        <h1 css={forHeader}>{project.projectName}</h1>
      </NavLink>
      <span
        css={css`
          padding: 10px 20px;
          font-size: 108%;
          color: ${colors.aliceLightBlue};
        `}
      >
        Add Tags
      </span>
    </div>
  )
}

export default ProjectsSummary
