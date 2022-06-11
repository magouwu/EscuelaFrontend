import React from 'react'
import Login from './components/Login'
import useUser from './hooks/useUser';


function Home() {

//  const isLogged = false
var isLogged = false

  if(isLogged===false) {
    console.log("Console log de HOME: " ,isLogged)
    return( 
    <>
    <Login/>
    </>
    );
  }
  if(isLogged===true){
    window.location = '/Portal'
  }

}

export default Home