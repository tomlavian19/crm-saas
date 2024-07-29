import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



export function Login(){

const navigate = useNavigate()
const formInput = useRef()

// function login(){
//     return true
// }

async function handleSubmit(e){
try{
    e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value
const response = false

if(response){
    navigate("/dashboard")
}else{
    alert("login failed, please try again!")
    formInput.current.focus()
}
}catch(error){
    console.log(error.message);
}

}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <span>
                <label htmlFor="email">Please fill your email:</label>
                <input id="email" ref={formInput} name="email" type="text" />
            </span>

            <span>
                <label htmlFor="password">Please fill your password:</label>
                <input id="password" name="password" type="text" />
            </span>

            <button> 
                Login!
            </button>




        </form>
        </>
    )
}