const {css} = require('@emotion/react')
const {colors} = require('../Styles')

function ErrorMessage({error, ...props}) {
  return (
    <div
      role="alert"
      css={css`
        color: ${colors.burgundyRed};
      `}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        css={css`
          whitespace: 'break-spaces';
          margin: '0';
          margin-bottom: -5;
        `}
      >
        {error.message}
      </pre>
    </div>
  )
}
export {ErrorMessage}
