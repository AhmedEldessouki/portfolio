/* eslint-disable react/jsx-props-no-spreading */
/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import type {CSSObject} from '@emotion/react'
import React from 'react'

import {labelWrapper, inputStyles} from '../Styles'

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  cssNew?: CSSObject
  name?: string
}

function Input({
  onChange: handleChange,
  onBlur: handleBlur,
  cssNew,
  name,
  ...inputOverrides
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={name} css={labelWrapper}>
      <input
        name={name}
        id={name}
        onChange={handleChange}
        aria-label={name}
        css={[inputStyles, cssNew]}
        onBlur={e => {
          handleBlur?.(e)
        }}
        {...inputOverrides}
      />
    </label>
  )
}

export default Input
