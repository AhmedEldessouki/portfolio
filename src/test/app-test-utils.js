import React from 'react'
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {ErrorBoundary} from 'react-error-boundary'
import {BrowserRouter} from 'react-router-dom'

import {ErrorMessageFallback} from '../components/Utils/util'
import {QueryClient, QueryClientProvider} from 'react-query'

// import {buildUser} from 'test/generate'
// import * as usersDB from 'test/data/users'
import {AuthProvider} from '../context/AuthProvider'

async function render(ui, {route = '/', user, ...renderOptions} = {}) {
  // if you want to render the app unauthenticated then pass "null" as the user
  //   user = typeof user === 'undefined' ? await loginAsUser() : user
  window.history.pushState({}, 'Test page', route)

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AuthProvider,
      ...renderOptions,
    }),
    user,
  }

  // wait for react-query to settle before allowing the test to continue
  await waitForLoadingToFinish()

  return returnValue
}

const queryClient = new QueryClient()

function AllProviders(children) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ErrorBoundary FallbackComponent={ErrorMessageFallback}>
            {children}
          </ErrorBoundary>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

const renderWithAllProviders = (ui, {route = '/', ...renderOptions} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: AllProviders, ...renderOptions})
}

// async function loginAsUser(userProperties) {
//   const user = buildUser(userProperties)
//   await usersDB.create(user)
//   const authUser = await usersDB.authenticate(user)
//   window.localStorage.setItem(auth.localStorageKey, authUser.token)
//   return authUser
// }

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    {timeout: 4000},
  )

export * from '@testing-library/react'
// export {render, userEvent, loginAsUser, waitForLoadingToFinish}
export {render, userEvent, waitForLoadingToFinish, renderWithAllProviders}
