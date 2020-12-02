/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import {labelWrapper} from '../../Styles'

function Input({onChange, name, ...props}) {
  return (
    <label htmlFor={name} css={labelWrapper}>
      <input onChange={onChange} name={name} aria-label={name} {...props} />
    </label>
  )
}

export default Input
