import * as RTL from '@testing-library/react'

import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {AuthProvider} from '../context/AuthProvider'
import {ErrorMessage} from '../components/Utils/util'

const AllTheProviders = ({children}) => {
  return (
    <ErrorBoundary fallback={ErrorMessage}>
      <AuthProvider>{children}</AuthProvider>
    </ErrorBoundary>
  )
}

const render = (ui, options) =>
  RTL.render(ui, {wrapper: AllTheProviders, ...options})

export {render}
