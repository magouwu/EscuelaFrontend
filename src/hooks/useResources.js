import { useContext, useState } from "react";
import Context from "../Context/UserContext";

export default function useResources() {
    const {token} = useContext(Context)
    const resources = "http://192.168.100.9:3050/getResources";
    const [user,setUser] = useState(false)
   const getResources = async() => {
    console.log(token)
        if(token){
            const headers = {
                Authorization: 'Bearer '+token
            };
        try{
            let resp = await fetch(resources,{
                method: "GET",
                headers               
            })
            const data = await resp.json()
            console.log(data)
            let capital = data.user
            let capitalized = capital.charAt(0).toUpperCase() + capital.slice(1);
            setUser(capitalized)
            }  
        catch(err){
            console.error("error del fetch", err)
        }
    }
    else{ console.log("no hay token")}
    }
    
    return{getResources, user}
        
}
