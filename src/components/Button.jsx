import React from 'react'

const Button = (props) => (
  <button
    className='btn'
    onClick={props.handleClick}
  >{props.text}</button>
)

export default Button
