import { React } from "react";
import Sidebar from "./components/Sidebar";

import useUser from "./hooks/useUser";

function Portal() {

    //  const isLogged = false
    const {isLogged} = useUser()
      console.log("Console log de PORTAL: ",isLogged)
      if(isLogged){
      return (
        <>
        <Sidebar/>
        </>
      )}
      if(!isLogged){
        window.location = '/'
      }

}

export default Portal;
