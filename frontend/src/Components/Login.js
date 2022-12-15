import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const navigate=useNavigate();
    const handleClick= async()=>{
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,pass}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            let info=await fetch("http://localhost:5000/getinfo",{
                method:"post",
                body:JSON.stringify({email}),
                headers:{
                    "Content-Type":"application/json"
                }

            });
            info=await info.json();
            localStorage.setItem("info",JSON.stringify(info));
            let curr_date=new Date();
            let prev_date=new Date(info.enrollment_date)
            //console.log(curr_date);
            
            let flag=info.prev_enrollment;
            let days=(prev_date.getTime() - curr_date.getTime())/(1000 * 60 * 60 * 24);
            if(flag && days<=30){
                navigate("/changebatch")
            }
            else{
                
                navigate("/enroll")

            }





           

        }
        else{
            alert("WRONG CREDENTIALS!")
        }

    }
    return (
        <div className="register">
            <h1>LOGIN</h1>
           
            <input className="input-box" type="text" placeholder="ENTER E-MAIL" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className="input-box" type="password" placeholder="ENTER PASSWORD" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
            <button className="button" onClick={handleClick}>LOGIN</button>
        </div>
    )
}
export default Login;