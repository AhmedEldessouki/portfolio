/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'

import {colors, labelWrapper, signWrapperInput} from '../Styles'

function Input({
  onChange: handleChange = () => {},
  onBlur: handleBlur = () => {},
  cleanColor,
  cssNew,
  name,
  ...props
}) {
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
        css={[signWrapperInput, cssNew]}
        onBlur={e => {
          const {valid} = e.target.validity
          valid ? setState(colors.lightGreen) : setState(colors.burgundyRed)
          handleBlur(e)
        }}
        {...props}
      />
    </label>
  )
}

export default Input
