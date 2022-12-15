import React from "react";
import { useNavigate } from "react-router-dom";
function Enroll(){
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/selectbatch");


    }
    return (
        <div>
            <button onClick={handleClick} className="enroll-btn">ENROLL NOW!</button>
        </div>
    )
}
export default Enroll;