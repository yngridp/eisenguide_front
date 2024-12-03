import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import SecurityPolicy from './components/SecurityPolicy';
import Contact from './components/Contact';
import AddTaskPage from './components/AddTaskPage';
import EditTaskPage from './components/EditTaskPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página Home por padrão */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/security" element={<SecurityPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:taskId" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
