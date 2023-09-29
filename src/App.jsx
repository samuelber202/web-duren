import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Assuming you're using Redux for authentication state
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch()
  
  const isLogin = useSelector((state) => state.auth.isLogin); 
  const token = useSelector((state) => state.auth.token); 

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken !== token) {
      dispatch({ type: 'LOGOUT', payload: false });
    }
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={ isLogin ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </main>
  );
}

export default App;
