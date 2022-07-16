import React,{useEffect} from 'react'
import Login from './components/Login'
import useUser from './hooks/useUser';
import useResources from './hooks/useResources';

function Home() {

//  const isLogged = false
const {isLogged, userLogin} = useUser()
console.log('user Home ', userLogin)
const {getResources, user} = useResources()
useEffect(() => {
 if(isLogged) getResources()
}, [isLogged])
useEffect(() => {
  if(user) 
  window.location = `/${user}`

 }, [user])


    return( 
    <>
    <Login/>
    </>
    );
    }


export default Home