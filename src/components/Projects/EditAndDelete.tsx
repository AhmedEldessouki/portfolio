/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {FaPen} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {colors} from '../../Styles'
import {deleteProject} from '../../Utils/apis'
import {replaceWhiteSpaceWith} from '../../Utils/replaceWhiteSpaceWith'
import {Project} from '../../../types/interfaces'
import PopUp from '../PopUp/PopUp'

export default function EditAndDelete({
  project,
  onClick,
}: {
  project: Project
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
        controls={replaceWhiteSpaceWith(project.name)}
      />
    </div>
  )
}
