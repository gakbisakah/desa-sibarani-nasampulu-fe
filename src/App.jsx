import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout"; // Pastikan path folder-nya sesuai dengan yang Anda buat
import DataPenduduk from "./pages/admin/DataPenduduk"; 
import Infografis from "./pages/admin/Infografis"; 
import KegiatanDesa from "./pages/admin/KegiatanDesa"; 
import Berita from "./pages/admin/Berita"; 
import APBdes from "./pages/admin/APBdes"; 
import Ppid from "./pages/admin/Ppid"; 
import Idm from "./pages/admin/Idm"; 



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ======================================= */}
        {/* Rute untuk Warga (Area Publik)          */}
        {/* ======================================= */}
        <Route path="/" element={<Home />} />

        {/* ======================================= */}
        {/* Rute untuk Admin (Area Privat)          */}
        {/* ======================================= */}
        {/* AdminLayout menjadi "Rumah" untuk semua rute admin */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* 'index' berarti ini adalah halaman pertama yang muncul saat membuka /admin */}
          <Route index element={<Dashboard />} />
          {/* Slamet menambahkan baris ini: */}
          <Route path="penduduk" element={<DataPenduduk />} />
          <Route path="infografis" element={<Infografis />} />
          <Route path="kegiatan" element={<KegiatanDesa />} />
          <Route path="berita" element={<Berita />} />
          <Route path="apbdes" element={<APBdes />} />
          <Route path="ppid" element={<Ppid />} />
          <Route path="idm" element={<Idm />} />

          
        </Route>

        {/* ======================================= */}
        {/* Rute jika halaman tidak ditemukan (404) */}
        {/* ======================================= */}
        <Route
          path="*"
          element={
            <h1 className="p-10 text-center text-red-500 text-2xl">
              404 - Halaman Tidak Ditemukan
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
