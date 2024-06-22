import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoponpesma from "../img/logoponpesma.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar h-full bg-gray-700 text-white flex flex-col items-center py-4">
      <div className="mb-8">
        <img src={logoponpesma} alt="Logo" className="w-40 h-40" />
      </div>
      {/* Menu Items */}
      <nav className="flex flex-col space-y-4 h-screen w-full px-4">
        <button onClick={() => navigate("/dashboard")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/dashboard") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-home"></i>
          <span className="text-shadow">Dashboard</span>
        </button>
        <button onClick={() => navigate("/datasantri")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/datasantri") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-user-graduate"></i>
          <span className="text-shadow">Data Santri</span>
        </button>
        <button onClick={() => navigate("/pengumuman")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/pengumuman") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-bell"></i>
          <span className="text-shadow">Pengumuman</span>
        </button>
        <button onClick={() => navigate("/pembayaranadmin")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/pembayaranadmin") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-money-check-alt"></i>
          <span className="text-shadow">Pembayaran</span>
        </button>
        <button onClick={() => navigate("/dashboardberita")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/dashboardberita") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-newspaper"></i>
          <span className="text-shadow">Berita</span>
        </button>
        <button onClick={() => navigate("/galeriadmin")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/galeriadmin") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-images"></i>
          <span className="text-shadow">Galeri</span>
        </button>
        <button onClick={() => navigate("/ceritaalumni")} className={`flex items-center space-x-2 p-2 rounded-md ${isActive("/ceritaalumni") ? "bg-teal-600" : "hover:bg-teal-600"}`}>
          <i className="fas fa-user-friends"></i>
          <span className="text-shadow">Cerita Alumni</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
