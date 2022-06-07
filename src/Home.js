import React from 'react'
import Login from './components/Login'
import useUser from './hooks/useUser';


function Home() {

//  const isLogged = false
const {isLogged} = useUser()
  if(!isLogged) {
    console.log("Console log de HOME: " ,isLogged)
    return( 
    <>
    <Login/>
    </>
    );
  }
  if(isLogged){
    window.location = '/Portal'
  }

}

export default Home