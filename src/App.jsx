import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/Login';
import Recover from './screens/Recover/Recover';
import Register from './screens/Register/Register';
import UserSettings from './screens/UserSettings/UserSettings';
import MovieManagement from './screens/MovieManagement/MovieManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userSettings" element={<UserSettings />} />
        <Route path="/movieManagement" element={<MovieManagement />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;