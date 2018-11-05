import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './container/HomePage'
import CarDetailsPage from './container/CarDetailsPage'
import NotFound from './components/NotFound'
import './styles/styles.scss'
import './assets/logo.png'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/car/:stockNumber' component={CarDetailsPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
