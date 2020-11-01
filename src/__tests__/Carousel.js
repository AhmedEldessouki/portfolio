import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import {toBeEnabled, toBeDisabled} from '@testing-library/jest-dom'

import Carousel from '../components/Utils/Carousel/Carousel'

test('Carousel Render and btn functionality', () => {
  render(
    <Carousel
      imgArray={[
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235621/zxlpwrjozjowzkisrenz.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235627/diy2mj8ifj1gwkccsoxe.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235627/sx3edhyyamja8djibaro.png',
      ]}
      imgAlt="project name"
    />,
  )
  expect(screen.getByTestId(/previous/i)).toBeDisabled()
  expect(screen.getByTestId(/btn0/i)).toBeTruthy()
  expect(screen.getByTestId(/btn1/i)).toBeTruthy()
  expect(screen.getByTestId(/btn2/i)).toBeTruthy()
  expect(screen.getByTestId(/next/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/next/i))
  expect(screen.getByTestId(/previous/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/previous/i))
  expect(screen.getByTestId(/previous/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/next/i))
  userEvent.click(screen.getByTestId(/next/i))
  expect(screen.getByTestId(/next/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/previous/i))
  expect(screen.getByTestId(/next/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/btn0/i))
  expect(screen.getByTestId(/previous/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/btn2/i))
  expect(screen.getByTestId(/next/i)).toBeDisabled()
})
