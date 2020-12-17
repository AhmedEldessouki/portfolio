/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {Image} from 'cloudinary-react'

import {disableScroll, enableScroll} from '../wheelAndTouch'
import {colors, mq} from '../../Styles'

function Carousel({imgArray, imgAlt}) {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState([])
  // TODO handle swiping
  // const [touchMove, setTouchMove] = React.useState([])
  const [touchEnd, setTouchEnd] = React.useState([])

  React.useEffect(() => {
    setCurrentImage(0)
  }, [imgArray])

  const cWrapper = css`
    width: 100%;
    display: grid;
    place-items: center;
    gap: 10px;
    background: #32374d;
    padding: 11px 0;
    border-top: 13px double ${colors.darkBlue};
    border-bottom: 13px double ${colors.darkBlue};
    border-radius: 22px;
    a {
      color: transparent;
      justify-self: center;
      grid-row: 1 / span 4;
      grid-column: 2 / span 3;
      img {
        margin: 0;
      }
    }
    ${mq.phoneLarge} {
      a {
        grid-row: 1;
        grid-column: 1;
      }
    }
    ${mq.s} {
      a {
        img {
          width: 200px;
          height: 200px;
        }
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

  function handlePrevious() {
    if (currentImage !== 0) setCurrentImage(currentImage - 1)
    return
  }

  function handleNext() {
    if (currentImage !== imgArray.length - 1) setCurrentImage(currentImage + 1)
    return
  }

  return (
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
      <a
        href={imgArray[currentImage]}
        // onTouchMove={e => {
        //   e.preventDefault()
        // }}
        onTouchStart={e => {
          setTouchStart(e.changedTouches)
        }}
        onTouchEnd={e => {
          setTouchEnd(e.changedTouches)
          console.dir(touchEnd)
          if (touchEnd.length === 1 && touchStart.length === 1) {
            if (touchEnd[0].screenX > touchStart[0].screenX) {
              handlePrevious()
            }
            if (touchEnd[0].screenX < touchStart[0].screenX) {
              handleNext()
            }
          }
        }}
        onMouseEnter={() => disableScroll()}
        onMouseLeave={() => enableScroll()}
        onWheel={e => {
          if (e.deltaY > 0) {
            handleNext()
          }
          if (e.deltaY < 0) {
            handlePrevious()
          }
        }}
      >
        <Image
          width="450"
          height="400"
          alt={imgAlt}
          fit="contain"
          src={`https://images.weserv.nl/?url=${imgArray[currentImage]}&w=450&h=380&fit=contain`}
        />
      </a>
      <section
        css={css`
          justify-self: center;
          grid-row: 5;
          grid-column: 2 / span 3;
          display: flex;
          flex-wrap: wrap;
          width: 80%;
          place-content: center;
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
      </section>
      <button
        type="button"
        data-testid="next"
        css={[currentImage === imgArray.length - 1 ? disabledBTN : btn, rightS]}
        onClick={() => {
          handleNext()
        }}
        disabled={currentImage === imgArray.length - 1}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Carousel
