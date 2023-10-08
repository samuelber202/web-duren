import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import KegiatanWarga from "./pages/KegiatanWargaPage";
import SejarahDesaPage from "./pages/SejarahDesaPage";
import Informasi from "./pages/Informasi";
import PengumumanAdmin from "./pages/PengumumanAdmin";
import KegiatanAdmin from "./pages/KegiatanAdmin";
import Statistik from "./pages/Statistik";

function App() {
  const isUserAuthenticated = localStorage.getItem("zxc9238[0]-2Token");

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tentang-desa" element={<SejarahDesaPage />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/statistik" element={<Statistik />} />

        <Route path="/dashboard">
          <Route
            index
            element={
              isUserAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="pengumuman"
            element={
              isUserAuthenticated ? (
                <PengumumanAdmin />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="kegiatan"
            element={
              isUserAuthenticated ? <KegiatanAdmin /> : <Navigate to="/login" />
            }
          />
        </Route>

        <Route path="/kegiatan-warga">
          <Route index element={<KegiatanWarga />} />
          <Route path="minggon" element={<PengumumanAdmin />} />
          <Route
            path="kegiatan"
            element={
              isUserAuthenticated ? <KegiatanAdmin /> : <Navigate to="/login" />
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
