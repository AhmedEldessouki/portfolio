/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'
import React from 'react'
import {colors, labelWrapper, signWrapperInput} from '../Styles'

function Input({
  onChange,
  onBlur = () => {},
  cleanColor,
  cssNew,
  name,
  ...props
}) {
  const [state, setState] = React.useState(colors.aliceLightBlue)

  React.useEffect(() => {
    if (cleanColor) {
      setState(colors.aliceLightBlue)
    }
  }, [cleanColor])

  return (
    <label htmlFor={name} css={labelWrapper}>
      <input
        name={name}
        id={name}
        onChange={onChange}
        aria-label={name}
        css={[
          signWrapperInput,
          css`
            border-color: ${state};
          `,
          cssNew,
        ]}
        onBlur={e => {
          e.target.validity.valid
            ? setState(colors.lightGreen)
            : setState(colors.burgundyRed)
          onBlur(e)
        }}
        {...props}
      />
    </label>
  )
}

export default Input
