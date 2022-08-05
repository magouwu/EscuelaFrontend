import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Subjects from '../components/Subjects'
import useResources from '../hooks/useResources'
import useUser from '../hooks/useUser'
import './container.css'

function Registry() {
    const {getResources, user, subjects} = useResources()
    const {isLogged} = useUser()
    useEffect(() => {
        getResources()
    }, [])

    if (!isLogged) {
        window.location = "/";
      } else {
    return (
    
    <div className='Container'>
    <Sidebar user={user}/>
    <Subjects props={{user, subjects}} />
    </div>
  )
    }
}

export default Registry
