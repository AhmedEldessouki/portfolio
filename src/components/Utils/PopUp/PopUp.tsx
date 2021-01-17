/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React, {Fragment} from 'react'
import {GoTrashcan} from 'react-icons/go'

import {colors, mq, weights} from '../../Styles'
import {useAsync} from '../hooks'
import '../onToggle.css'

function PopUp({info, onClickYes}: {info: string; onClickYes: Function}) {
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
    background-color: ${colors.independenceBlue};
    opacity: 94.7%;
    border: 10px solid ${colors.darkBlue};
    padding: 10px 20px;
    border-radius: 29%;
    width: 300px;
    justify-content: center;
    align-items: center;
  `
  const btn = css`
    background-color: ${colors.blueFont};
    color: ${colors.independenceBlue};
    border-radius: 14%;
    border: none;

    font-size: 140%;
    :hover {
      opacity: 0.8;
    }
    ${mq.s} {
      font-size: 100%;
    }
  `
  const btnTrash = css`
    background: inherit;
    box-shadow: none;
    border: 0;
    margin: 0;
    padding: 0;
    color: ${colors.burgundyRed};
    font-size: 2rem;
    font-weight: ${weights.black};
    :hover,
    :focus {
      color: ${colors.kindaBlue};
    }
  `
  const {status, dispatch} = useAsync()

  // onClick outside PopUp Component close PopUp
  const ref = React.useRef<any | undefined>()

  React.useEffect(() => {
    const handleClickOutside = (event: {target: any}) => {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch({type: 'idle'})
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [dispatch])

  async function handleDelete() {
    await onClickYes()
    dispatch({type: 'idle'})
  }

  return (
    <Fragment>
      <button
        css={btnTrash}
        type="button"
        data-testid="delete-button"
        onClick={() => dispatch({type: 'pending'})}
      >
        <GoTrashcan />
      </button>
      {status === 'pending' && (
        <div
          id="popup"
          css={{
            position: 'fixed',
            width: '362px',
            height: '161px',
            top: '50%',
            left: '50%',
            marginTop: '-84px',
            marginLeft: '-188px',
          }}
        >
          <div css={popWrapper} ref={ref}>
            <header>
              <h1 css={{marginBottom: '10px'}}>Warning</h1>
            </header>
            <p css={{margin: 0}}>Do you want to delete this {info}</p>
            <div
              css={{
                marginTop: '10px',
                display: 'flex',
                placeContent: 'space-evenly',
                width: '100%',
              }}
            >
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
                    background-color: ${colors.burgundyRed};
                  `,
                ]}
                onClick={handleDelete}
              >
                Yup!
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default PopUp
