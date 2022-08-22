import { useEffect } from 'react'
import './container.css'
import Sidebar from '../components/Sidebar'
import useUser from '../hooks/useUser'
import useResources from '../hooks/useResources'
import styled from 'styled-components'

function InCourse() {
  const { isLogged } = useUser()
  const { getResources, user } = useResources()

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
        <h1>Hello {user} This is Your Subjects in Course...</h1>
        </IndexContainer>
      </ParentContainer>
    )
  }
}

export default InCourse

const IndexContainer = styled.div`
padding-left: 50px;`

const ParentContainer = styled.div`
display: flex;
align-items:stretch;
height: 100%;`
