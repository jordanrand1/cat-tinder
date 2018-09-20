import React, { Fragment } from 'react'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <ProtectedRoute exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App