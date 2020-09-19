/* eslint-disable import/order */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState, Fragment} from 'react'
import {GoTrashcan} from 'react-icons/go'
import {connect} from 'react-redux'

import {deleteProject} from '../../Store/Actions/ProjectsActions'
import {deleteMessage} from '../../Store/Actions/ContactedMeActions'
import {colors, weights} from '../../Styles'

function PopUp({project, deleteProject, contact, deleteMessage, title}) {
  const popWrapper = css`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    display: flex;
    flex-direction: column;
    place-items: center;
    position: absolute;
    top: calc(50% - calc(288.3px / 2));
    left: calc(50% - calc(554.8px / 2));
    background-color: ${colors.independenceBlue};
    opacity: 94.7%;
    border: 10px solid ${colors.darkBlue};
    padding: 3% 7%;
    border-radius: 29%;
    width: 323px;
    height: 178px;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s ease-in-out;
    box-shadow: 0 0 140px 100px ${colors.kindaDarkBlue};
  `
  const btn = css`
    :before {
      width: 100%;
    }
    background-color: ${colors.whiteFaded};
    color: ${colors.independenceBlue};
    border-radius: 14%;
    border: 0px;
    font-size: 140%;
    padding: 4px 36px;
    margin: 0 15px;
    :hover,
    :focus {
      color: ${colors.aliceLightBlue};
      background-color: ${colors.darkBlue};
    }
  `
  const btnTrash = css`
    background: inherit;
    box-shadow: none;
    border: 0;
    margin: 0;
    padding: 0;
    color: ${colors.aliceLightBlue};
    font-size: 2rem;
    font-weight: ${weights.black};
    :hover,
    :focus {
      color: ${colors.burgundyRed};
    }
  `
  const [show, setShow] = useState(true)

  function handleDelete() {
    if (project) {
      deleteProject(project)
      setShow(!show)
    } else if (contact) {
      deleteMessage(contact)
      setShow(!show)
    } else {
      console.log('damnnnnnn i worked')
      setShow({show: false})
    }
  }
  return (
    <Fragment>
      <button
        css={btnTrash}
        type="button"
        onClick={() => [setShow(!show), console.log('clicked')]}
      >
        <GoTrashcan />
      </button>
      {show ? null : (
        <div css={popWrapper} id="popup">
          <header>
            <h1>Warning</h1>
          </header>
          <h2>
            Do you want to delete this
            {title}
          </h2>
          <footer>
            <button type="button" css={btn} onClick={() => setShow(!show)}>
              Nah!
            </button>
            <button
              type="button"
              css={[
                btn,
                css`
                  :hover {
                    background-color: ${colors.burgundyRed};
                  }
                `,
              ]}
              onClick={handleDelete}
            >
              Yup!
            </button>
          </footer>
        </div>
      )}
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: project => dispatch(deleteProject(project)),
    deleteMessage: contact => dispatch(deleteMessage(contact)),
  }
}
export default connect(null, mapDispatchToProps)(PopUp)
