import * as RTL from '@testing-library/react'

import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {AuthProvider} from '../context/AuthProvider'
import {ErrorMessageFallback} from '../components/Utils/util'

const AllTheProviders = ({children}) => {
  return (
    <AuthProvider>
      <ErrorBoundary FallbackComponent={ErrorMessageFallback}>
        {children}
      </ErrorBoundary>
    </AuthProvider>
  )
}

const render = (ui, options) =>
  RTL.render(ui, {wrapper: AllTheProviders, ...options})

export {render}
