import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Batch(){
    
    const[batch,setBatch]=useState("6-7 AM");
    const handle1=()=>{
        setBatch("6-7 AM")
    }
    const handle2=()=>{
        setBatch("7-8 AM")
    }
    const handle3=()=>{
        setBatch("8-9 AM")
    }
    const handle4=()=>{
        setBatch("5-6 PM")
    }
    const navigate=useNavigate();
    
    const handleClick= async(e)=>{
        e.preventDefault();
       
        let email=JSON.parse(localStorage.getItem('user')).email
        console.log(email)

        let result = await fetch("http://localhost:5000/updateBatch",{
            method:'Post',
            body:JSON.stringify({email,batch}),
            headers:{
                "Content-Type":"application/json"
            }

        });
        result=await result.json();
        console.log(result);
        alert("BATCH CHANGED FOR NEXT MONTH!")

        let info=JSON.parse(localStorage.getItem('info'))
        let curr_date=new Date();
        let prev_date=new Date(info.enrollment_date)
        
        
        let flag=info.prev_enrollment;
        let days=(prev_date.getTime() - curr_date.getTime())/(1000 * 60 * 60 * 24);
        if(flag && days<=30){
            navigate("/changebatch")
        }
        else{
            
            navigate("/payment")

        }


        




        
    }


    return (
        <form >
            <input type="radio" checked={batch==="6-7 AM"} onChange={handle1}  />6-7 AM
            <input type="radio" checked={batch==="7-8 AM"} onChange={handle2} />7-8 AM
            <input type="radio" checked={batch==="8-9 AM"} onChange={handle3}  />8-9 AM
            <input type="radio" checked={batch==="5-6 PM"} onChange={handle4}  />5-6 PM
            <button onClick={handleClick}>SUBMIT</button>
        </form>
    )
}
export default Batch;