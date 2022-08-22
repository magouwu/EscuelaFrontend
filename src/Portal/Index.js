import React from 'react'
import './container.css'
import styled from 'styled-components'

function Index({ user }) {
  return (
      <IndexContainer>
        <h1>Welcome {user}</h1>
      </IndexContainer>
  )
}

export default Index

const IndexContainer = styled.div`
  padding-left: 50px;
`
