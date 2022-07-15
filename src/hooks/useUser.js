import { useContext, useCallback, useState } from "react";
import Context from "../Context/UserContext";


export default function useUser() {
  const { token, setToken } = useContext(Context);
  const url = "http://192.168.100.9:3050/login";
  const [loginErr,setErr] = useState(false)
  const [userLogin,setUserlogin] = useState(false)
 
  const login = (
    ({username,password}) => {

      return fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,password}),
      })
      .then(response => response.json())
      .then((data) => {
        console.log('console log post json', data.username)
        setUserlogin(data.username)
        window.localStorage.setItem('token', data.token)
        setToken(data.token)        
        
      })
      .catch((error) => {
        window.localStorage.removeItem('token')
        console.error('Error:', error);
        setErr(true)
    
      });
    });

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    setToken(null);

  }, [setToken]);

  return {
    isLogged: Boolean(token),
    login,
    logout,
    loginErr,
    userLogin
  };
}
