import React from "react"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Signup=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPass]=useState("")
    const navigate=useNavigate();

    const collectData = async()=>{
        
        console.log(name,email,password);
        let result=await fetch("http://localhost:5000/register",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        localStorage.setItem("user",JSON.stringify(result));
        console.log(result);

        let info=await fetch("http://localhost:5000/insert",{
            method:"post",
            body:JSON.stringify({email}),
            headers:{
                "Content-Type":"application/json"
            }

        });
        info=await info.json();
        localStorage.setItem("info",JSON.stringify(info))
        console.log(info);

        navigate("/enroll")

    }



    return (
        <div className="register">
            <h1>REGISTER</h1>
            <input className="input-box" type="text" placeholder="ENTER NAME" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input className="input-box" type="text" placeholder="ENTER E-MAIL" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className="input-box" type="password" placeholder="ENTER PASSWORD" value={password} onChange={(e)=>{setPass(e.target.value)}} />
            <button className="button" onClick={collectData}>SIGN-UP</button>
        </div>
    )
}
export default Signup;