import React from "react";
import { useNavigate } from "react-router-dom";
function ChangeBatch(){
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/selectbatch")


    }
    return(
        <div>
            
            <button onClick={handleClick}>CHANGE BATCH FOR NEXT MONTH</button>
        </div>
    )

}
export default ChangeBatch;