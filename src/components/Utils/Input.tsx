/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import type {CSSObject} from '@emotion/react'
import React from 'react'

import {colors, labelWrapper, formWrapperInput} from '../Styles'

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  cleanColor?: boolean
  cssNew?: CSSObject
  name?: string
}

function Input({
  onChange: handleChange,
  onBlur: handleBlur,
  cleanColor,
  cssNew,
  name,
  ...inputOverrides
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const [state, setState] = React.useState(colors.darkBlue)

  React.useEffect(() => {
    if (cleanColor) {
      setState(colors.darkBlue)
    }
  }, [cleanColor])

  return (
    <label htmlFor={name} css={labelWrapper}>
      <input
        name={name}
        id={name}
        onChange={handleChange}
        aria-label={name}
        style={{borderColor: state}}
        css={[formWrapperInput, cssNew]}
        onBlur={e => {
          const {valid} = e.target.validity
          valid ? setState(colors.lightGreen) : setState(colors.burgundyRed)
          handleBlur && handleBlur(e)
        }}
        {...inputOverrides}
      />
    </label>
  )
}

export default Input
