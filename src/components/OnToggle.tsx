/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import type {Message, Project} from '../../types/interfaces'
import {colors} from '../Styles'
import {replaceWhiteSpaceWith} from '../Utils/replaceWhiteSpaceWith'
import Title from './Title'

interface OnToggleProps {
  items: Array<Project | Message>
  children: React.ReactNode
  displayedData: Project | Message | undefined
  setDisplayData: React.Dispatch<
    React.SetStateAction<Project | Message | undefined>
  >
}

const OnToggle = React.forwardRef(function OnToggle(
  {items, setDisplayData, children, displayedData}: OnToggleProps,
  ref,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = React.useRef<any>()
  const [touchStart, setTouchStart] = React.useState<
    React.TouchEvent | React.MouseEvent | undefined | number | React.TouchList
  >()
  const [touchEnd, setTouchEnd] = React.useState<
    React.TouchEvent | React.MouseEvent | undefined | number | React.TouchList
  >()

  function moveFocus() {
    containerRef.current.focus()
  }

  React.useImperativeHandle(ref, () => ({
    moveFocus,
  }))

  const [show, setShow] = React.useState(() => {
    const i = items.findIndex(item => item.name === displayedData?.name)
    if (window.innerWidth >= 1220) {
      if (i === items.length - 1) return {min: i - 3, max: i, range: 4}
      return {min: i, max: i + 3, range: 4}
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
    <section id="disclosure">
      <div
        css={css`
          display: flex;
          place-content: flex-end;
          margin-right: 5px;
        `}
      >
        <button
          css={css`
            background: ${colors.darkBlue};
            color: ${colors.aliceLightBlue};
            border: 5px solid ${colors.darkBlue};
            font-weight: bolder;
            border-radius: 32%;
            padding: 0px 10px;
            :hover {
              cursor: pointer;
              opacity: 0.8;
            }
          `}
          ref={containerRef}
          data-testid="close-toggler"
          onClick={() => setDisplayData(undefined)}
          aria-current="false"
          aria-label="click to close project disclosure"
          aria-controls="disclosure"
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
          gap: 10px;
          margin-bottom: 16px;
        `}
        role="navigation"
        id="disclosure-nav"
      >
        <button
          onClick={handlePrevious}
          type="button"
          aria-controls="disclosure-nav"
          data-testid="before-toggle"
          css={[
            css`
              border: 5px solid ${colors.darkBlue};
              border-radius: 23px 0 0 24px;
              height: 50px;
              width: 25px;
              :hover {
                cursor: pointer;
                background: ${colors.kindaDarkBlue};
              }
            `,
            {background: show.min === 0 ? colors.burgundyRed : colors.darkBlue},
          ]}
          disabled={show.min === 0}
          aria-label="click to view previous project"
        />
        <div
          aria-controls="disclosure-view"
          css={css`
            width: 100%;
            display: flex;
            place-content: space-evenly;
          `}
          onMouseDown={e => {
            e.preventDefault()
            setTouchStart(e.screenX)
          }}
          onMouseUp={e => {
            setTouchEnd(e.screenX)
            handleTouch(e.screenX, touchStart)
          }}
          onTouchStart={(e: React.TouchEvent) => {
            setTouchStart(e.changedTouches)
          }}
          onTouchEnd={e => {
            setTouchEnd(e.changedTouches)
            if (Array.isArray(touchStart) && Array.isArray(touchEnd)) {
              if (touchEnd.length > 0 && touchStart.length > 0) {
                if (e.changedTouches[0].screenY - touchStart[0].screenY < 3) {
                  handleTouch(
                    e.changedTouches[0].screenX,
                    touchStart[0].screenX,
                  )
                }
              }
            }
          }}
        >
          {items.map((item, i) => {
            if (i >= show.min && i <= show.max) {
              const noSpaceName = replaceWhiteSpaceWith(item.name)
              return (
                <Title
                  key={`${replaceWhiteSpaceWith(noSpaceName)}-${i * 2}`}
                  name={item.name}
                  csx={css`
                    @keyframes example {
                      from {
                        opacity: 0.4;
                      }
                      to {
                        opacity: 1;
                      }
                    }
                    opacity: 1;
                    animation-name: example;
                    animation-duration: 3s;
                  `}
                  onClick={() => {
                    setDisplayData(item)
                  }}
                  testId={`${noSpaceName}-title`}
                  highlight={displayedData?.id === item.id}
                />
              )
            }
            return null
          })}
        </div>
        <button
          onClick={handleNext}
          data-testid="next-toggle"
          type="button"
          aria-controls="disclosure-nav"
          css={[
            css`
              border-radius: 0 23px 24px 0;
              border: 5px solid ${colors.darkBlue};
              height: 50px;
              width: 25px;
              :hover {
                cursor: pointer;
                background: ${colors.kindaDarkBlue};
              }
            `,
            {
              background:
                show.max >= items.length - 1
                  ? colors.burgundyRed
                  : colors.darkBlue,
            },
          ]}
          disabled={show.max >= items.length - 1}
          aria-label="click to view next project"
        />
      </div>
      <article id="disclosure-view">{children}</article>
    </section>
  )
})

export default OnToggle
