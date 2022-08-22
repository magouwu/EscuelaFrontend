import React from 'react'
import './Xbutton.css'

function Xbutton(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`icon nav-icon-5 ${props.enabled ? 'open' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Xbutton
