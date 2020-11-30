import * as React from 'react'
import ReactDOM from 'react-dom'
import {
  useQuery,
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools'

import * as serviceWorker from './serviceWorker'
import App from './App'
import {AuthProvider} from './components/Utils/AuthProvider'

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AuthProvider>
        <App />
        <ReactQueryDevtools />
      </AuthProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
