import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../img/hamam.png";
import searchIcon from "../img/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faEye } from "@fortawesome/free-solid-svg-icons";

const LihatBukti = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [selectedSantri, setSelectedSantri] = useState(null); // Add this state to manage the selected santri

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

  const openChangePassword = () => {
    setIsChangePasswordOpen(true);
  };

  const closeChangePassword = () => {
    setIsChangePasswordOpen(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Validate new password
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
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="p-4 font-poppins min-h-screen">
          <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold mb-4 text-black">
                <span className=" p-2 rounded-full text-black">Lihat Bukti Pembayaran</span>
              </h1>
            </div>
            <div className="mb-4 bg-neutral-200 border-gray-300 p-4 rounded-md">
              <p className="text-black mb-2 font-bold">10 Mei 2024</p>
              <p className="text-gray-700 mb-2">
                Untuk calon santri 2024/2025 silahkan membayar daftar ulang maksimal Senin, 20 Mei 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut <span className="text-teal-600">356373738833338</span>. Untuk rincian
                biaya bisa lihat
                <a href="#" className="text-teal-600">
                  disini
                </a>
              </p>
            </div>
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">NAMA</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">NIM</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">ALAMAT</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">KATEGORI</th>
                  <th className="py-2 px-4 border-b bg-neutral-300 border-gray-400">Bukti Pembayaran</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-4 border-b">Sayifulloh</td>
                  <td className="py-2">2021150108</td>
                  <td className="py-2">Pagerandong, Mrebet, Wonosobo</td>
                  <td className="py-2">Beasiswa 5 Juz</td>
                  <td className="py-2">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          setShowEditConfirmation(true);
                          setSelectedSantri(item);
                        }}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4 border-b">Rafi Aji S</td>
                  <td className="py-2">2021150112</td>
                  <td className="py-2">Pangkalanbun, Palembang</td>
                  <td className="py-2">Reguler</td>
                  <td className="py-2">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          setShowEditConfirmation(true);
                          setSelectedSantri(item);
                        }}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-3 flex flex-wrap gap-8 justify-center">
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
                    <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Email" value="admin@gmail.com" />
                  </div>
                  <button type="button" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4" onClick={closePopup}>
                    Tutup
                  </button>
                </form>
              </div>
            </div>
          )}
          {/* Popup for Change Password */}
          {isChangePasswordOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4">Ganti Kata Sandi</h2>
                <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Kata Sandi Saat Ini"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="newPassword">Kata Sandi Baru:</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Kata Sandi Baru"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Konfirmasi Kata Sandi Baru"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                  <div className="flex justify-between">
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4" onClick={closeChangePassword}>
                      Batal
                    </button>
                    <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4">
                      Ganti Kata Sandi
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
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span className="text-black">Ganti Kata Sandi</span>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md" onClick={openChangePassword}>
                      Ganti
                    </button>
                  </div>
                </div>
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4" onClick={closeSettingsPopup}>
                  Tutup
                </button>
              </div>
            </div>
          )}
          {/* Popup for Logout */}
          {isLogoutPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4">Keluar</h2>
                <p>Apakah Anda yakin ingin keluar?</p>
                <div className="flex justify-between mt-4">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={closeLogoutPopup}>
                    Batal
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                      // Add your logout logic here
                      navigate("/login");
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

export default LihatBukti;
