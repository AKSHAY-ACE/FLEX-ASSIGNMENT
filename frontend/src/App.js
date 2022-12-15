
import './App.css';
import Navbar from './Components/Navbar.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from "./Components/Signup"
import Login from './Components/Login';
import Enroll from './Components/Enroll';
import ChangeBatch from './Components/ChangeBatch';
import Batch from './Components/Batch';
import Payment from './Components/Payment';
function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>FLEX - YOGA - ADMISSIONs</h1>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/enroll" element={<Enroll/>}></Route>
      <Route path="/changebatch" element={<ChangeBatch/>}></Route>
      <Route path="/selectbatch" element={<Batch/>}></Route>
      <Route path ="/payment" element={<Payment/>}></Route>

    </Routes>
    
    </BrowserRouter>
    
  </div>
    
      
  );
}

export default App;
