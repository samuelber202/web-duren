import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import KegiatanWarga from "./pages/KegiatanWargaPage";
import SejarahDesaPage from "./pages/SejarahDesaPage";

function App() {
  const isUserAuthenticated = localStorage.getItem("zxc9238[0]-2Token");
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kegiatan-warga" element={<KegiatanWarga />} />
        <Route path="/tentang-desa" element={<SejarahDesaPage />} />

        <Route
          path="/dashboard"
          element={
            isUserAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
