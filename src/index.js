import * as React from 'react'
import ReactDOM from 'react-dom'
import {unstable_trace as trace} from 'scheduler/tracing'
import {ReactQueryDevtools} from 'react-query-devtools'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'

import App from './App'
import {AuthProvider} from './components/Utils/AuthProvider'
import {Profiler} from './components/profiler'
import {auth} from './components/Utils/firebase'

const queryCache = new QueryCache()

trace('initial render', performance.now(), () =>
  ReactDOM.render(
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Profiler id="App Root" phases={['mount']}>
        <AuthProvider auth={auth}>
          <App />
        </AuthProvider>
      </Profiler>
      <ReactQueryDevtools />
    </ReactQueryCacheProvider>,
    document.getElementById('root'),
  ),
)
