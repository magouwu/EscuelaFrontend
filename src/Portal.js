import { React, useContext,useEffect} from "react";
import Context from "./Context/UserContext";
import Sidebar from "./components/Sidebar";
import useUser from "./hooks/useUser";
import useResources from "./hooks/useResources";
function Portal() {
  const { isLogged } = useUser();
  console.log("Console log de PORTAL: ", isLogged);
  
const {getResources, user} = useResources()
  
  useEffect(() => {
    getResources()
}, [])

  if (!isLogged) {
    window.location = "/";
  } else {
    return (
      <>
          <Sidebar />
      </>
    );
  }

  // }
  // if(!isLogged){
  //   window.location = '/'
  // }
}

export default Portal;
