import React from "react";
import {useNavigate} from "react-router-dom"
function Payment(){
    const navigate=useNavigate()
    const handleClick= async ()=>{
        let email=JSON.parse(localStorage.getItem('info')).email;
        let result= await fetch("http://localhost:5000/acceptPayment",{
            method:"post",
            body:JSON.stringify({email}),
            headers:{
                "Content-Type":"application/json"
            }

        });
        alert("PAYMENT SUCCESSFUL!!")
        navigate("/changebatch")


    }
    return(
        <div>
            <button onClick={handleClick}>PAY FEES</button>
        </div>
    )
}
export default Payment;