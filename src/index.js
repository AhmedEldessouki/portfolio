import * as React from 'react'
import ReactDOM from 'react-dom'
import {unstable_trace as trace} from 'scheduler/tracing'

import App from './App'
import {AuthProvider} from './components/Utils/AuthProvider'
import {Profiler} from './components/profiler'

trace('initial render', performance.now(), () =>
  ReactDOM.render(
    <Profiler id="App Root" phases={['mount']}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Profiler>,
    document.getElementById('root'),
  ),
)
