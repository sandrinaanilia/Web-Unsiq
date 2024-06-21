import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import User from "../assets/img/iconuser.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup

  const openSettingsPopup = () => {
    setIsSettingsPopupOpen(true);
  };

  const closeSettingsPopup = () => {
    setIsSettingsPopupOpen(false);
  };

  const openLogoutPopup = () => {
    setIsLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Lakukan validasi kata sandi baru
    if (newPassword !== confirmPassword) {
      setPasswordError("Kata sandi baru tidak cocok");
      return;
    }

    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsChangePasswordOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className={`w-2 h-2 ml-2 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openPopup}>
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openSettingsPopup}>
                  Pengaturan
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openLogoutPopup}>
                  Keluar
                </li>{" "}
                {/* Open logout popup */}
              </ul>
            )}
          </div>
        </div>

        {/* Summary Boxes */}
        <div className="flex justify-center p-9 gap-6">
          <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg w-1/3 flex items-center justify-between mr-6">
            <div>
              <h3 className="text-xl font-bold">Total Akun</h3>
              <span className="text-4xl">34</span>
            </div>
            <img src={User} alt="Account" className="w-20 h-20" />
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-1/3 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Pendaftar Diterima</h3>
              <span className="text-4xl">0</span>
            </div>
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 4.707 6.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-3 flex flex-wrap gap-8 justify-center">
          <div className="bg-white border border-gray-300 p-10 px-10 py-12 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Pendaftar Baru</h2>
              <a href="/datasantri" className="text-teal-600">
                lihat
              </a>
            </div>
            <ul>
              {["Sayifulloh", "Boy", "Feri"].map((name, index) => (
                <li key={index} className="flex justify-between items-center border-b-2 py-2">
                  <span>
                    {index + 1}. {name}
                  </span>
                  <span>5 Mei 2024 22:30</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-10 px-8 py-12 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Informasi Pembayaran</h2>
            <ul>
              {["Sayifulloh", "Boy", "Feri"].map((name, index) => (
                <li key={index} className="flex justify-between items-center border-b-2 py-2">
                  <span>
                    {index + 1}. {name}
                  </span>
                  <button onClick={() => navigate("/pembayaranadmin")} className="bg-teal-600 text-white px-2 py-1 rounded-lg text-xs">
                    Lihat Pembayaran
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* New Activity Section */}
          <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg w-100">
            <h2 className="text-2xl font-bold mb-4">Aktivitas</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pendataan Mahasiswa reguler dan beasiswa serta upload surat pernyataan dan daftar ulang</li>
              <li>Tagihan iuran kas bulanan dan agenda qurban</li>
              <li>Upload berita terbaru terkait data absen mengaji</li>
            </ul>
          </div>

          {/* Popup for Profile */}
          {isPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4">Profil</h2>
                <form className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                    <span className="text-black font-bold">Admin</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="namaLengkap">Nama Lengkap:</label>
                    <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="abdurohman@gmail.com" value="Abdurohman@gmail.com" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="noTelp">Nomor Telepon:</label>
                    <input type="tel" id="noTelp" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="08977654323" value="08977654323" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="jabatan">Jabatan:</label>
                    <input type="text" id="jabatan" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Sekretaris 2" value="Sekretaris 2" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kataSandi">Kata Sandi:</label>
                    <input type="password" id="kataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="*********" value="Abd*******98" readOnly />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closePopup}>
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* Popup for Settings */}
          {isSettingsPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
                <form className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                    <span className="text-black font-bold">Admin</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="namaLengkap">Nama Lengkap:</label>
                    <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>
                      Ubah Kata Sandi
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Kembali</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* Popup for Logout */}
          {isLogoutPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4">Keluar dari akun anda?</h2>
                <div className="flex justify-end gap-4">
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeLogoutPopup}>
                    Tidak
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => {
                      // Add your logout logic here
                      console.log("Logout!");
                      closeLogoutPopup();
                    }}
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
