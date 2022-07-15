import React from 'react'
import Login from './components/Login'
import useUser from './hooks/useUser';


function Home() {

//  const isLogged = false
const {isLogged, userLogin} = useUser()
console.log('user Home ', userLogin)



if(isLogged){
    window.location = `/${userLogin}`
}
else{
    console.log("Console log de HOME: " ,isLogged)
    return( 
    <>
    <Login/>
    </>
    );
    }

}

export default Home