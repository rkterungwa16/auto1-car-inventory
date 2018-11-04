import React from 'react'

const Button = (props) => (
  <button
    className='btn'
    onClick={props.handleClick}
  >Filter</button>
)

export default Button
