import React from 'react'
import styled from 'styled-components'
function Error() {
  return (
    <ErrorContainer>Error Page Not Found!!</ErrorContainer>
  )
}

export default Error

const ErrorContainer = styled.div`
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: plum;
`