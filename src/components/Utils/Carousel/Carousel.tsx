/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {colors, mq} from '../../Styles'

type ImgProps = {
  imgAlt: string
  onClick: () => void
  src: string
}
function Img({
  imgAlt,
  onClick,
  src,
  ...imgOverride
}: ImgProps & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      alt={imgAlt}
      onClick={() => {
        onClick()
      }}
      css={css`
        @keyframes in {
          from {
            opacity: 0;
            filter: grayscale(100%);
          }
          to {
            filter: grayscale(0);
            opacity: 1;
          }
        }
        filter: grayscale(0);
        margin: 0;
        animation-name: in;
        animation-duration: 3s;
      `}
      src={src}
      {...imgOverride}
    />
  )
}

function Carousel({
  imgArray,
  imgAlt,
}: {
  imgArray: Array<string>
  imgAlt: string
}) {
  const [currentImage, setCurrentImage] = React.useState<number>(0)
  const [touchStart, setTouchStart] = React.useState<React.TouchList | number>(
    0,
  )
  // TODO handle swiping
  // const [touchMove, setTouchMove] = React.useState<Object|number>([])
  const [touchEnd, setTouchEnd] = React.useState<React.TouchList | number>(0)

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
      opacity: 1;
      transition: cubic-bezier(0.65, 0.05, 0.36, 1) 2s;
      margin: 0;
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
    border: none;
    background: rgb(0, 153, 255, 0.9);
    color: ${colors.kindaDarkBlue};
    font-weight: 900;
    opacity: 0.6;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 11.5px;
    width: 78px;
    height: 60px;
    :hover {
      background: ${colors.blueFont};
    }
    ${mq.phoneLarge} {
      display: none;
    }
  `
  const leftS = css`
    grid-row: 1 / span 5;
    grid-column: 1;
  `
  const rightS = css`
    grid-row: 1 / span 5;
    grid-column: 5;
  `
  const disabledBTN = css`
    background: ${colors.burgundyRed};
    :hover {
      background: ${colors.burgundyRed};
    }
  `
  const carouselNav = css`
    border: none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin: 0 5px 10px;
    cursor: pointer;

    :hover {
      background: ${colors.blueFont};
    }
  `

  const displayPrevious = React.useCallback(() => {
    if (currentImage !== 0) setCurrentImage(currentImage - 1)
    return
  }, [currentImage])

  const displayNext = React.useCallback(() => {
    if (currentImage !== imgArray.length - 1) setCurrentImage(currentImage + 1)
    return
  }, [currentImage, imgArray.length])

  const handleTouch = React.useCallback(
    (end, start) => {
      if (end > start) {
        displayPrevious()
      }
      if (end < start) {
        displayNext()
      }
    },
    [displayNext, displayPrevious],
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
      <div
        css={cWrapper}
        onMouseDown={e => {
          e.preventDefault()
          setTouchStart(e.screenX)
        }}
        onMouseUp={e => {
          setTouchEnd(e.screenX)
          handleTouch(e.screenX, touchStart)
        }}
        onTouchStart={e => {
          setTouchStart(e.changedTouches)
        }}
        onTouchEnd={e => {
          setTouchEnd(e.changedTouches)
          if (typeof touchEnd !== 'number' && typeof touchStart !== 'number') {
            if (touchEnd.length === 1 && touchStart.length === 1) {
              if (e.changedTouches[0].screenY - touchStart[0].screenY < 3) {
                handleTouch(e.changedTouches[0].screenX, touchStart[0].screenX)
              }
            }
          }
        }}
      >
        <button
          type="button"
          css={[btn, leftS, currentImage === 0 ? disabledBTN : null]}
          onClick={() => {
            displayPrevious()
          }}
          data-testid="previous"
          disabled={currentImage === 0}
        >
          {'<'}
        </button>
        <div
          css={{
            width: 350,
            height: 259,
            display: 'flex',
            placeContent: 'center',
            background: colors.backgroundShade,
          }}
        >
          <Img
            imgAlt={imgAlt}
            width="330"
            src={`https://images.weserv.nl/?url=${imgArray[currentImage]}&w=450&h=350&fit=contain`}
            onClick={() => window.open(imgArray[currentImage])}
          />
        </div>
        <button
          type="button"
          data-testid="next"
          css={[
            btn,
            rightS,
            currentImage === imgArray.length - 1 ? disabledBTN : null,
          ]}
          onClick={() => {
            displayNext()
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
        {imgArray.map((image, i) => {
          return (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentImage(i)}
              data-testid={`btn${i}`}
              css={[
                carouselNav,
                {
                  background:
                    currentImage === i ? colors.blueFont : colors.darkBlue,
                },
              ]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
