import React from 'react'
import styled from 'styled-components'


function Index(props) {
  return (
    <div><IndexContainer><h1>Welcome {props.user}</h1></IndexContainer></div>
  )
}

export default Index

const IndexContainer = styled.div`
position: relative;
left: 300px;
`