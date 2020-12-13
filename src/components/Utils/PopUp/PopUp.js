/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {Fragment} from 'react'
import {GoTrashcan} from 'react-icons/go'

import {colors, weights} from '../../Styles'
import {useAsync} from '../util'

function PopUp({title, onClick}) {
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
    position: fixed;
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
  const {status, dispatch} = useAsync()

  async function handleDelete() {
    await onClick()
    dispatch({type: 'idle'})
  }

  return (
    <Fragment>
      {status === 'idle' ? (
        <button
          css={btnTrash}
          type="button"
          onClick={() => dispatch({type: 'pending'})}
        >
          <GoTrashcan />
        </button>
      ) : (
        <div css={popWrapper} id="popup">
          <header>
            <h1>Warning</h1>
          </header>
          <h2>Do you want to delete this {title}</h2>
          <footer>
            <button
              type="button"
              css={btn}
              onClick={() => dispatch({type: 'idle'})}
            >
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

export default PopUp
