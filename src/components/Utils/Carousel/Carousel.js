/* eslint-disable react/jsx-fragments */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Fragment, useState} from 'react'
import {Image} from 'cloudinary-react'
import PropTypes from 'prop-types'

import {colors, mq} from '../../../Styles'

function Carousel({imgArray, imgAlt}) {
  const [currentImage, setCurrentImage] = useState(0)

  const cWrapper = css`
    width: 100%;
    display: grid;
    place-items: center;
    height: 440px;
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
  return (
    <Fragment>
      {imgArray.length !== 1 ? (
        <div css={cWrapper}>
          <button
            type="button"
            css={[currentImage === 0 ? disabledBTN : btn, leftS]}
            onClick={() =>
              currentImage !== 0 ? setCurrentImage(currentImage - 1) : null
            }
            disabled={currentImage === 0}
          >
            {'<'}
          </button>

          <a href={imgArray[currentImage]}>
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
              ${mq.phoneLarge} {
                grid-row: 2;
                grid-column: 1;
              }
            `}
          >
            {imgArray.map((data, forKC) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                key={data}
                type="button"
                onClick={() => setCurrentImage(forKC)}
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
            css={[
              currentImage === imgArray.length - 1 ? disabledBTN : btn,
              rightS,
            ]}
            onClick={() =>
              currentImage !== imgArray.length
                ? setCurrentImage(currentImage + 1)
                : null
            }
            disabled={currentImage === imgArray.length - 1}
          >
            {'>'}
          </button>
        </div>
      ) : (
        <a href={imgArray[0]}>
          <Image
            width="250"
            fit="contain"
            alt={imgAlt}
            src={`https://images.weserv.nl/?url=${imgArray[currentImage]}&w=450&h=400&fit=contain`}
          />
        </a>
      )}
    </Fragment>
  )
}
Carousel.defaultProps = {
  imgArray: [],
  imgAlt: '',
}

Carousel.prototypes = {
  imgArray: PropTypes.array.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default Carousel
