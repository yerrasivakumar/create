

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Registeration from './components/Register'
import Login from './components/Login'
import './App.css'
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Appbar";

const App = () =>{
    return (
      <Router >
        <Navbar/>
      <Routes>
        <Route path="/registeration" element={<Registeration/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
       
   );
  }

 
export default App;