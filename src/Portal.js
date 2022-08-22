import { React, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import useUser from './hooks/useUser'
import useResources from './hooks/useResources'
import Index from './Portal/Index'
import styled from 'styled-components'
function Portal () {
  const { isLogged } = useUser()
  const { getResources, user } = useResources()

  useEffect(() => {
    getResources()
  }, [])

  if (!isLogged) {
    window.location = '/'
  } else {
    return (
      <><ParentContainer>
          <Sidebar user={user} />
          <Index user={user}/>
          </ParentContainer>
      </>
    )
  }

  // }
  // if(!isLogged){
  //   window.location = '/'
  // }
}

export default Portal

const ParentContainer = styled.div`
display: flex;
align-items:stretch;
height: 100%;`
