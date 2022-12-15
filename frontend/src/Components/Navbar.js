import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar=()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout =()=>{
        localStorage.clear();
       

    }
    return (
        <div>
            {
                auth?
                <ul className='nav-ul'>
                <li><Link onClick={logout} to="/signup">LOGOUT</Link></li>
                <li>WELCOME {JSON.parse(auth).name}</li>
               </ul>
               :
            <ul className='nav-ul'>
                <li><Link to="/signup">Sign Up</Link></li>
                <li>{auth?<></>:<Link to="/login">Login</Link>}</li>
            </ul>

            }
            
            
        </div>
    )
}
export default Navbar;