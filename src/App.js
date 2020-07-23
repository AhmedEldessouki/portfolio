import React, { useEffect, lazy, Suspense, useState } from 'react'
import './App.scss'
import Home from './componant/Home/Home'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import Dashboard from './componant/Dashboard/Dashboard'
// import MessageDetails from './componant/Dashboard/Messaging/MessageDetails'
import SignIn from './componant/Auth/SignIn'
// import SignUp from './componant/Auth/SignUp'
// import ProjectDetails from './componant/Home/Projects/ProjectDetails'
// import CreateProject from './componant/Home/Projects/CreateProject'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// const SignIn = lazy(() => import('./componant/Auth/SignIn'))
const SignUp = lazy(() => import('./componant/Auth/SignUp'))
const MessageDetails = lazy(() =>
  import('./componant/Dashboard/Messaging/MessageDetails')
)
const ProjectDetails = lazy(() =>
  import('./componant/Home/Projects/ProjectDetails')
)
const CreateProject = lazy(() =>
  import('./componant/Home/Projects/CreateProject')
)
const Dashboard = lazy(() => import('./componant/Dashboard/Dashboard'))

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    document.title = 'Ahmed Eldessouki'
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])

  return (
    <div className="App">
      <Suspense fallback={loading}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/messages/:id" component={MessageDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/create-project" component={CreateProject} />
            <Route path="/edit/:id" component={CreateProject} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App
