/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'
import React from 'react'
import ImgWithFallback from '../Image'

// TODO A11y switch to object to place name on image's alt
export default function Tag({
  tagUrl,
  ...imageOverrides
}: {tagUrl: string} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <li>
      <ImgWithFallback
        css={css`
          font-size: 108%;
          margin: 0;
        `}
        height="30"
        width="30"
        fallback="/icons/apple-icon-180.png"
        src={tagUrl}
        alt="tag"
        {...imageOverrides}
      />
    </li>
  )
}
