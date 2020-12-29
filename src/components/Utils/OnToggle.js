/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {colors, mq, weights} from '../Styles'

function Title({name, onClick, highlight, testId}) {
  const title = [
    css`
      color: white;
      background-color: ${colors.darkBlue};
      padding: 15px 10px;
      letter-spacing: 1.4px;
      font-size: 1.82rem;
      font-weight: ${weights.medium};
      margin: 0;
      :hover,
      :focus {
        color: ${colors.independenceBlue};
        background: ${colors.aliceLightBlue};
        font-family: sans-serif;
      }
      ${mq.s} {
        font-size: 1.2rem;
      }
    `,
    highlight
      ? css`
          color: ${colors.independenceBlue};
          background: ${colors.aliceLightBlue};
          font-family: sans-serif;
        `
      : null,
  ]

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
      <h1 css={title} data-testid={testId}>
        {name}
      </h1>
    </button>
  )
}

const OnToggle = React.forwardRef(function OnToggle(
  {items, setSelected, children, selected},
  ref,
) {
  const containerRef = React.useRef()
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)

  function moveFocus() {
    containerRef.current.focus()
  }

  React.useImperativeHandle(ref, () => ({
    moveFocus,
  }))

  const [show, setShow] = React.useState(() => {
    const i = items.findIndex(item => item.name === selected.name)
    if (window.innerWidth >= 1220) {
      if (i === items.length - 1) return {min: i - 3, max: i, range: 4}
      return {min: i - 1, max: i + 2, range: 4}
    } else if (window.innerWidth >= 900) {
      if (i === items.length - 1) return {min: i - 2, max: i, range: 3}
      return {min: i, max: i + 2, range: 3}
    } else if (window.innerWidth >= 480) {
      if (i === items.length - 1) return {min: i - 1, max: i, range: 2}
      return {min: i, max: i + 1, range: 2}
    } else {
      return {min: i, max: i, range: 1}
    }
  })

  const handlePrevious = React.useCallback(() => {
    if (show.min > 0) {
      setShow({...show, min: show.min - 1, max: show.max - 1})
    }
  }, [show])

  const handleNext = React.useCallback(() => {
    if (show.max <= items.length - 1) {
      setShow({...show, max: show.max + 1, min: show.min + 1})
    }
  }, [items.length, show])

  const handleTouch = React.useCallback(
    (end, start) => {
      if (end > start) {
        handlePrevious()
      }
      if (end < start) {
        handleNext()
      }
    },
    [handleNext, handlePrevious],
  )

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
          ref={containerRef}
          data-testid="close-toggler"
          onClick={() => setSelected(null)}
        >
          X
        </button>
      </div>
      <div
        css={css`
          display: flex;
          margin: 0 5px;
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
          onClick={handlePrevious}
          type="button"
          data-testid="before-toggle"
          css={css`
            background: ${colors.darkBlue};
            height: 50px;
            width: 25px;
            border-radius: 23px 0 0 24px;
            border: 5px solid ${colors.darkBlue};
            :hover,
            :focus {
              background: ${colors.kindaDarkBlue};
            }
          `}
          disabled={show.min === 0}
        />
        <div
          css={{
            display: 'flex',
            width: '100%',
            placeContent: 'space-evenly',
          }}
          onMouseDown={e => {
            e.preventDefault()
            setTouchStart(e.screenX)
          }}
          onMouseUp={e => {
            setTouchEnd(e.screenX)
            handleTouch(e.screenX, touchStart)
          }}
          onMouseMove={e => {
            e.preventDefault()
          }}
          onTouchStart={e => {
            setTouchStart(e.changedTouches)
          }}
          onTouchMove={e => {
            e.preventDefault()
          }}
          onTouchEnd={e => {
            setTouchEnd(e.changedTouches)
            if (touchEnd.length > 0 && touchStart.length > 0) {
              if (e.changedTouches[0].screenY - touchStart[0].screenY < 3) {
                handleTouch(e.changedTouches[0].screenX, touchStart[0].screenX)
              }
            }
          }}
        >
          {items?.map((item, i) => {
            if (i >= show.min && i <= show.max) {
              return (
                <div
                  css={css`
                    margin-bottom: 0;
                  `}
                  key={item.id}
                >
                  <Title
                    name={item.name}
                    onClick={() => {
                      setSelected(item)
                    }}
                    testId={`${i}-title`}
                    highlight={selected.name === item.name}
                  />
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        <button
          onClick={handleNext}
          data-testid="next-toggle"
          type="button"
          css={css`
            background: ${colors.darkBlue};
            height: 50px;
            width: 25px;
            border-radius: 0 23px 24px 0;
            border: 5px solid ${colors.darkBlue};
            :hover,
            :focus {
              background: ${colors.kindaDarkBlue};
            }
          `}
          disabled={show.max >= items.length - 1}
        />
      </div>
      {children}
    </div>
  )
})

export default OnToggle
