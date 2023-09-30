import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/layouts/DashboardLayout';

function App() {
  
  const isUserAuthenticated = localStorage.getItem('zxc9238[0]-2Token')
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={ isUserAuthenticated ?  <Dashboard/>
           
           : <Navigate to="/login" />}
        />
      </Routes>
    </main>
  );
}

export default App;
