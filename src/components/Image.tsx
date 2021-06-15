/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}: {
  src: string
  fallback: string
  type?: string
} & React.ImgHTMLAttributes<HTMLImageElement>) => (
  <picture>
    <source srcSet={src} type={type} />
    <img src={fallback} alt="" {...delegated} />
  </picture>
)

export default ImgWithFallback
