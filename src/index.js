import * as React from 'react'
import ReactDOM from 'react-dom'
import {unstable_trace as trace} from 'scheduler/tracing'
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'

import App from './App'
import {Profiler} from './profiler'
import {AuthProvider} from './context/AuthProvider'

const queryClient = new QueryClient()

trace('initial render', performance.now(), () =>
  ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <Profiler id="App Root" phases={['mount']}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Profiler>
      <ReactQueryDevtools />
    </QueryClientProvider>,
    document.getElementById('root'),
  ),
)
