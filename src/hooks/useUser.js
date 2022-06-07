import { useContext, useCallback, useState } from "react";
import Context from "../Context/UserContext";


export default function useUser() {
  const { token, setToken } = useContext(Context);
  const url = "http://192.168.100.9:3050/login";
  const [loginErr,setErr] = useState(false)

  const login = useCallback(
    ({username,password}) => {

      return fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,password}),
      })
      .then(response => response.json())
      .then((token) => {
        console.log(token)
        window.localStorage.setItem('token', token)
        setToken(token)
        
      })
      .catch((error) => {
        window.localStorage.removeItem('token')
        console.error('Error:', error);
        setErr(true)
    
      });
    },[setToken]);

  const logout = useCallback(() => {
    window.localStorage.removeItem('token')
    setToken(null);
  }, [setToken]);

  return {
    isLogged: Boolean(token),
    login,
    logout,
    loginErr
  };
}
