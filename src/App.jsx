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
import KegiatanSinglePage from "./pages/KegiatanSinglePage";
import ScrollToTop from "./config/ScrollToTop";
import PengumumanWargaPage from "./pages/PengumumanWargaPage";
import PengumumanSinglePage from "./pages/PengumumanSinglePage";
import HapusPengumuman from "./pages/HapusPengumuman";
import HapusBerita from "./pages/HapusBerita";
import NotFound from "./pages/NotFound";

function App() {
  const isUserAuthenticated = localStorage.getItem("zxc9238[0]-2Token");

  return (
    <main>
        <ScrollToTop/>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sejarah-desa" element={<SejarahDesaPage />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/statistik">
        <Route
            index element={<Statistik />} 
          />

        </Route>

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
            path="hapus-pengumuman"
            element={
              isUserAuthenticated ? (
                <HapusPengumuman />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="berita"
            element={
              isUserAuthenticated ? <KegiatanAdmin /> : <Navigate to="/login" />
            }
          />
          <Route
            path="hapus-berita"
            element={
              isUserAuthenticated ? (
                <HapusBerita />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>

        <Route path="/berita-warga" element={<KegiatanWarga />} />
        <Route path="/berita-warga/:id" element={<KegiatanSinglePage />} />
        <Route path="/pengumuman-warga" element={<PengumumanWargaPage />} />
        <Route path="/pengumuman-warga/:id" element={<PengumumanSinglePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
}

export default App;
