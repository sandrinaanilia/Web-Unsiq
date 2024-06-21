import "../src/css/Beranda.css";
import Beranda from "./page/Beranda.jsx";
import About from "./page/About.jsx";
import Galeri from "./page/Galeri.jsx";
import Pendaftaran from "./page/Pendaftaran.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Berita1 from "./page/Berita1.jsx";
import Berita2 from "./page/Berita2.jsx";
import Berita3 from "./page/Berita3.jsx";
import Berita4 from "./page/Berita4.jsx";
import FAQ from "./page/FAQ.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Admin/Dashboard.jsx";
import DataSantri from "./Admin/DataSantri.jsx";
import InformasiPendaftaran from "./Admin/InformasiPendaftaran.jsx";
import Pembayaran from "./DashboardUser/Pembayaran.jsx";
import UbahSandi from "./DashboardUser/UbahSandi.jsx";
import Lonceng from "./DashboardUser/Lonceng.jsx";
import Pengaturan from "./DashboardUser/Pengaturan.jsx";
import Pengumuman from "./Admin/Pengumuman.jsx";
import PembayaranAdmin from "./Admin/PembayaranAdmin.jsx";
import BerkasDataSantri from "./Admin/BerkasDataSantri.jsx";
import EditBerkasData from "./Admin/EditBerkasData.jsx";
import FormulirPendaftaran from "./DashboardUser/FormulirPendaftaran.jsx";
import GaleriAdmin from "./Admin/GaleriAdmin.jsx";
import DashboardBerita from "./Admin/DashboardBerita.jsx";
import LihatBukti from "./Admin/LihatBukti.jsx";

import ViewBerita from "./Admin/ViewBerita.jsx";
import CeritaAlumni from "./Admin/CeritaAlumni.jsx";
import BeritaBesar from "./page/BeritaBesar.jsx";

function App() {
  const token = true;
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/about" element={<About />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/pendaftaran" element={<Pendaftaran />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/berita1" element={<Berita1 />} />
      <Route path="/berita2" element={<Berita2 />} />
      <Route path="/berita3" element={<Berita3 />} />
      <Route path="/berita4" element={<Berita4 />} />
      <Route path="/beritabesar" element={<BeritaBesar />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/datasantri" element={<DataSantri />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/pengaturan" element={<Pengaturan />} />
      <Route path="/ubahsandi" element={<UbahSandi />} />
      <Route path="/lonceng" element={<Lonceng />} />
      <Route path="/informasipendaftaran" element={<InformasiPendaftaran />} />
      <Route path="/pengumuman" element={<Pengumuman />} />
      <Route path="/pembayaranadmin" element={<PembayaranAdmin />} />
      <Route path="/berkasdatasantri" element={<BerkasDataSantri />} />
      <Route path="/editberkasdata" element={<EditBerkasData />} />
      <Route path="/galeriadmin" element={<GaleriAdmin />} />
      <Route path="/formulirpendaftaran" element={<FormulirPendaftaran />} />
      <Route path="/dashboardberita" element={<DashboardBerita />} />
      <Route path="/viewberita" element={<ViewBerita />} />
      <Route path="/ceritaalumni" element={<CeritaAlumni />} />
      <Route path="/lihatbukti" element={<LihatBukti />} />
      {/* Routes accessible only to non-logged-in users */}
      {/* <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} /> */}
      {/* <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes accessible only to logged-in users */}
      {/* {token && <></>} */}
    </Routes>
  );
}

export default App;
