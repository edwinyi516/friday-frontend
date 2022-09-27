import React from 'react';
import './App.css';
import Member from './components/Members/Members.js'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from "./pages/Home"
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
  return (
    <>
    <h1>Friday.com Test</h1>
    <Member />
    </>
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
