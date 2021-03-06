import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import logo from '../assets/logo.png'

const NotFound = () => (
  <Fragment>
    <Header />
    <div className='not-found__container'>
      <div className='not-found'>
        <img
          className='not-found__logo'
          src={logo} alt='Auto1'
        />
        <h2 className='not-found__text--dark not-found__text-extra-large'>
      404 - Not Found
        </h2>
        <p
          className='not-found__text--medium not-found__text--dark'
        >Sorry, the page you are looking for does not exist.</p>
        <p
          className='not-found__text--medium'
        >
    You can always go back to the
          <Link
            className='not-found__link' to='/'
          > homepage</Link>
        </p>
      </div>
    </div>

  </Fragment>
)

export default NotFound
