import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from "./components/menu/Navbar";
import { UserRoleProvider } from './context/UserRoleContext';

function App() {
  return (
    <UserRoleProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    <AppRoutes />
    </div>
    </BrowserRouter>
    </UserRoleProvider>
  );
}

export default App;
