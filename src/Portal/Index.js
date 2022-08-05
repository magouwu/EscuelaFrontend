import React from 'react'
import styled from 'styled-components'
import  './container.css'


function Index(props) {
  return (
    <div className='Container'><h1>Welcome {props.user}</h1></div>
  )
}

export default Index

