import { useContext, useState } from "react";
import Context from "../Context/UserContext";

export default function useResources() {
    const {token} = useContext(Context)
    const resources = "https://magoescuelabackend.herokuapp.com/getResources";
    const [user,setUser] = useState(false)
    const [subjects,setSubjects] = useState([])
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
            setSubjects(data.subjects)
            }  
        catch(err){
            console.error("error del fetch", err)
        }
    }
    else{ console.log("no hay token")}
    }

    const sendRequest = async(data)=>{
        console.log(data)
    }
    
    return{getResources, user, subjects,sendRequest}
        
}
