warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 9c25b2b..0fcb90c 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -8,11 +8,13 @@[m [mimport Navbar from "./components/Navbar";[m
 import ErrorPage from "./ErrorPage";[m
 import Portal from "./Portal";[m
 [m
[32m+[m
 //Express js[m
 //Nodejs[m
 //[m
 import { UserContextProvider } from "./Context/UserContext";[m
 [m
[32m+[m
 function App() {[m
   return ([m
     <div className="App">[m
[1mdiff --git a/src/Home.js b/src/Home.js[m
[1mindex fcb36e5..8c909fb 100644[m
[1m--- a/src/Home.js[m
[1m+++ b/src/Home.js[m
[36m@@ -6,8 +6,9 @@[m [mimport useUser from './hooks/useUser';[m
 function Home() {[m
 [m
 //  const isLogged = false[m
[31m-const {isLogged} = useUser()[m
[31m-  if(!isLogged) {[m
[32m+[m[32mvar isLogged = false[m
[32m+[m
[32m+[m[32m  if(isLogged===false) {[m
     console.log("Console log de HOME: " ,isLogged)[m
     return( [m
     <>[m
[36m@@ -15,7 +16,7 @@[m [mconst {isLogged} = useUser()[m
     </>[m
     );[m
   }[m
[31m-  if(isLogged){[m
[32m+[m[32m  if(isLogged===true){[m
     window.location = '/Portal'[m
   }[m
 [m
[1mdiff --git a/src/Portal.js b/src/Portal.js[m
[1mindex 6b0eb26..d19c3c2 100644[m
[1m--- a/src/Portal.js[m
[1m+++ b/src/Portal.js[m
[36m@@ -1,22 +1,25 @@[m
 import { React } from "react";[m
[31m-import Sidebar from "./components/Sidebar";[m
 [m
[32m+[m[32mimport Sidebar from "./components/Sidebar";[m
 import useUser from "./hooks/useUser";[m
 [m
 function Portal() {[m
 [m
[31m-    //  const isLogged = false[m
[31m-    const {isLogged} = useUser()[m
[31m-      console.log("Console log de PORTAL: ",isLogged)[m
[31m-      if(isLogged){[m
[31m-      return ([m
[31m-        <>[m
[32m+[m[32m     //const isLogged = false[m
[32m+[m[32m      const isLogged = useUser()[m
[32m+[m[32m       console.log("Console log de PORTAL: ",isLogged)[m
[32m+[m[32m    //   if(isLogged){[m
[32m+[m[32m         return ([m
[32m+[m[41m           [m
[32m+[m[32m          isLogged===true ? <>[m
         <Sidebar/>[m
[31m-        </>[m
[31m-      )}[m
[31m-      if(!isLogged){[m
[31m-        window.location = '/'[m
[31m-      }[m
[32m+[m[32m        </> :  window.location = '/'[m
[32m+[m[32m      )[m[41m [m
[32m+[m[41m    [m
[32m+[m[32m    // }[m
[32m+[m[32m      // if(!isLogged){[m
[32m+[m[32m      //   window.location = '/'[m
[32m+[m[32m      // }[m
 [m
 }[m
 [m
[1mdiff --git a/src/hooks/useUser.js b/src/hooks/useUser.js[m
[1mindex 206dacb..ad3a92d 100644[m
[1m--- a/src/hooks/useUser.js[m
[1m+++ b/src/hooks/useUser.js[m
[36m@@ -19,9 +19,11 @@[m [mexport default function useUser() {[m
       })[m
       .then(response => response.json())[m
       .then((token) => {[m
[31m-        console.log(token)[m
[32m+[m[32m        const isLogged = true[m
[32m+[m[32m        console.log(token, isLogged)[m
         window.localStorage.setItem('token', token)[m
         setToken(token)[m
[32m+[m[41m    [m
         [m
       })[m
       .catch((error) => {[m
