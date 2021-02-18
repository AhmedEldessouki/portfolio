/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {colors} from '../../Styles'

function ProjectType({projType}: {projType: 'Personal' | 'Contribution' | ''}) {
  const [hovered, setHover] = React.useState(false)
  return (
    <div
      css={{
        display: 'flex',
        placeContent: 'flex-end',
      }}
    >
      <span
        onMouseEnter={() => setHover(!hovered)}
        onMouseLeave={() => setHover(!hovered)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label={projType ?? 'personal'}
        css={{
          borderRadius: 50,
          border: `1px solid`,
          borderColor:
            projType === 'Contribution' ? 'orange' : colors.lightGreen,
          color: projType === 'Contribution' ? 'orange' : colors.lightGreen,
          textAlign: 'center',
          fontSize: hovered ? '0.95rem' : '1rem',
          width: 24,
          height: 24,
          transition: 'width 0.3s ease-in-out',
          marginBottom: 9,
          overflow: 'hidden',
          cursor: 'help',
          paddingTop: '1px',
          ':hover, :focus': {
            width: projType === 'Contribution' ? 110 : 80,
          },
        }}
      >
        {hovered ? projType : '!'}
      </span>
    </div>
  )
}

export default ProjectType
