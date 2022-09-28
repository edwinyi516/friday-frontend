import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
