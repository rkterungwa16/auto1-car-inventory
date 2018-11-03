import React, { Component } from 'react'

import CarsPage from './container/CarsPage'
import './styles/styles.scss'
import './assets/logo.png'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <CarsPage />
      </div>
    )
  }
}

export default App
