import React, { lazy, Suspense } from 'react'
import './App.scss'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = React.lazy(() => import('./componant/Home/Home'))
const ProjectDetails = lazy(() =>
  import('./componant/Home/Projects/ProjectDetails')
)
const SignIn = lazy(() => import('./componant/Auth/SignIn'))

const Dashboard = lazy(() => import('./componant/Dashboard/Dashboard'))
const MessageDetails = lazy(() =>
  import('./componant/Dashboard/Messaging/MessageDetails')
)
const SignUp = lazy(() => import('./componant/Auth/SignUp'))
const CreateProject = lazy(() =>
  import('./componant/Home/Projects/CreateProject')
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/messages/:id" component={MessageDetails} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/create-project" component={CreateProject} />
            <Route path="/edit/:id" component={CreateProject} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App
