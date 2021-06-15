/* eslint-disable react/no-render-return-value */
import * as React from 'react'
import ReactDOM from 'react-dom'
import {unstable_trace as trace} from 'scheduler/tracing'
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'

import App from './App'
import Profiler from './profiler'
import {AuthProvider} from './context/AuthProvider'
import * as serviceWorkerRegistration from './serviceWorkerFolder/serviceWorkerRegistration'

import 'bootstrap/dist/css/bootstrap-reboot.css'

const queryClient = new QueryClient()

trace('initial render', performance.now(), () =>
  ReactDOM.render(
    <Profiler id="App Root" phases={['mount']}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthProvider>
    </Profiler>,
    document.getElementById('root'),
  ),
)
serviceWorkerRegistration.register()
