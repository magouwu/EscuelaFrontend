import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Subjects from '../components/Subjects'
import useResources from '../hooks/useResources'
import useUser from '../hooks/useUser'

function Registry() {
    const {getResources, user} = useResources()
    const {isLogged} = useUser()
    useEffect(() => {
        getResources()
    }, [])

    if (!isLogged) {
        window.location = "/";
      } else {
    return (
    <>
    <Sidebar user={user}/>
    <Subjects user={user}/>
    </>
  )
    }
}

export default Registry