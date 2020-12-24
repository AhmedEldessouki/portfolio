/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {Image} from 'cloudinary-react'

import {colors, mq} from '../../Styles'

function Carousel({imgArray, imgAlt}) {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState(0)
  // TODO handle swiping
  // const [touchMove, setTouchMove] = React.useState([])
  const [touchEnd, setTouchEnd] = React.useState(0)

  React.useEffect(() => {
    setCurrentImage(0)
  }, [imgArray])

  const cWrapper = css`
    width: 100%;
    display: grid;
    place-items: center;
    gap: 10px;

    div {
      grid-row: 1 / span 4;
      grid-column: 2 / span 3;
      img {
        margin: 0;
      }
    }
    ${mq.phoneLarge} {
      grid-gap: 0;
      div {
        grid-row: 1;
        grid-column: 1;
      }
    }
  `

  const btn = css`
    border: 0 solid;
    background: ${colors.darkBlue};
    color: ${colors.kindaDarkBlue};
    font-weight: 900;
    padding: 0 47px;
    opacity: 0.6;
    font-size: 4rem;
    cursor: pointer;
    :hover {
      background: ${colors.whiteFaded};
    }
    ${mq.phoneLarge} {
      display: none;
    }
  `
  const leftS = css`
    grid-row: 1 / span 5;
    grid-column: 1;
    justify-self: start;
    ${mq.phoneLarge} {
      display: none;
    }
  `

  const rightS = css`
    grid-row: 1 / span 5;
    grid-column: 5;
    justify-self: end;
    ${mq.phoneLarge} {
      display: none;
    }
  `

  const disabledBTN = css`
    border: 0 solid;
    background: ${colors.burgundyRed};
    color: ${colors.whiteFaded};
    font-weight: 900;
    padding: 0 47px;
    opacity: 0.6;
    font-size: 4rem;
    ${mq.phoneLarge} {
      display: none;
    }
  `
  const carouselNav = css`
    border: 0 solid ${colors.darkBlue};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: ${colors.darkBlue};
    margin: 0 5px 10px;
    cursor: pointer;

    :hover,
    :focus {
      background: ${colors.whiteFaded};
    }
  `

  const handlePrevious = React.useCallback(() => {
    if (currentImage !== 0) setCurrentImage(currentImage - 1)
    return
  }, [currentImage])

  const handleNext = React.useCallback(() => {
    if (currentImage !== imgArray.length - 1) setCurrentImage(currentImage + 1)
    return
  }, [currentImage, imgArray.length])

  const handleTouch = React.useCallback(
    (end, start) => {
      if (end > start) {
        console.log(end, start)
        handlePrevious()
      }
      if (end < start) {
        console.log(end, start)
        handleNext()
      }
    },
    [handleNext, handlePrevious],
  )

  return (
    <div
      css={css`
        background: #32374d;
        padding: 11px 0;
        border-top: 13px double ${colors.darkBlue};
        border-bottom: 13px double ${colors.darkBlue};
        border-radius: 22px;
        display: flex;
        flex-direction: column;
        place-items: center;
      `}
    >
      <div css={cWrapper}>
        <button
          type="button"
          css={[currentImage === 0 ? disabledBTN : btn, leftS]}
          onClick={() => {
            handlePrevious()
          }}
          data-testid="previous"
          disabled={currentImage === 0}
        >
          {'<'}
        </button>
        <div>
          <Image
            width="330"
            alt={imgAlt}
            onDoubleClick={() => window.open(imgArray[currentImage])}
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
              if (touchEnd.length === 1 && touchStart.length === 1) {
                if (e.changedTouches[0].screenY - touchStart[0].screenY < 3) {
                  handleTouch(
                    e.changedTouches[0].screenX,
                    touchStart[0].screenX,
                  )
                }
              }
            }}
            fit="contain"
            src={`https://images.weserv.nl/?url=${imgArray[currentImage]}&w=450&h=380&fit=contain`}
          />
        </div>
        <button
          type="button"
          data-testid="next"
          css={[
            currentImage === imgArray.length - 1 ? disabledBTN : btn,
            rightS,
          ]}
          onClick={() => {
            handleNext()
          }}
          disabled={currentImage === imgArray.length - 1}
        >
          {'>'}
        </button>
      </div>
      <div
        css={css`
          justify-self: center;
          grid-row: 5;
          grid-column: 2 / span 3;
          display: flex;
          flex-wrap: wrap;
          width: 80%;
          place-content: center;
          margin-top: 10px;
          ${mq.phoneLarge} {
            grid-row: 2;
            grid-column: 1;
          }
        `}
      >
        {imgArray.map((data, forKC) => (
          <button
            key={data}
            type="button"
            onClick={() => setCurrentImage(forKC)}
            data-testid={`btn${forKC}`}
            css={[
              carouselNav,
              currentImage === forKC
                ? css`
                    background: ${colors.whiteFaded};
                    outline: none;
                  `
                : null,
            ]}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
