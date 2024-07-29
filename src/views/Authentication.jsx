import { useEffect, useState } from "react";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { useNavigate } from "react-router-dom";
import { userExsits } from "../services/auth";

export function Authentication(){

const navigate = useNavigate()

if(userExsits(true)){
    navigate ("/dashboard")
}

const [existingUser, setexistingUser] = useState(true)
const [authMessage, setAuthMessage] = useState()


function toggleAuthMessage(){
    if(existingUser){
        setAuthMessage("Not a user, Sign up!")
    } else{
        setAuthMessage("Already a user, log in!")
    }
}

useEffect(()=>{
    toggleAuthMessage()
},[existingUser])


    return(
        <>
        {existingUser &&
        <Login/>
        }

        { !existingUser &&
        <SignUp/>

        }

        <button onClick={()=>{
            setexistingUser(!existingUser)
            
        }}>
            {authMessage}
        </button>
        </>
    )
}