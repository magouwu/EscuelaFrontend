import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import './container.css'
import useUser from '../hooks/useUser'
import useResources from '../hooks/useResources'
import styled from 'styled-components'
function History() {
  const { getResources, user } = useResources()
  const { isLogged } = useUser()
  useEffect(() => {
    getResources()
  }, [])

  if (!isLogged) {
    window.location = '/'
  } else {
    return (
      <ParentContainer>
        <Sidebar user={user}/>
        <IndexContainer>
        <h1>Hello {user} this is Your History Carreer </h1>
        </IndexContainer>
      </ParentContainer>
    )
  }
}

export default History

const IndexContainer = styled.div`
padding-left: 50px;`

const ParentContainer = styled.div`
display: flex;
align-items:stretch;
height: 100%;`
