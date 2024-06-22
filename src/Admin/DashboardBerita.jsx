import React, { useState } from "react";
import arrow from "../img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../img/hamam.png";
import searchIcon from "../img/search.png";
import fotoberita1 from "..//img/foto besar.jpg";
import fotoberita2 from "../img/berita1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const DashboardBerita = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for change password popup
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);
  const [isAddPostPopupOpenTambah, setIsAddPostPopupOpenTambah] = useState(false);

  const openViewPopup = (berita) => {
    setSelectedBerita(berita);
    setShowViewPopup(true);
  };

  const closeViewPopup = () => {
    setShowViewPopup(false);
  };

  const openAddPostPopupTambah = () => {
    setIsAddPostPopupOpen(true);
  };

  const closeAddPostPopupTambah = () => {
    setIsAddPostPopupOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleJudulChange = (e) => setJudul(e.target.value);
  const handleTanggalChange = (e) => setTanggal(e.target.value);
  const handleDeskripsiChange = (e) => setDeskripsi(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const onClose = () => setShowEditConfirmation(false);

  const handleDelete = () => {
    console.log("Deleting santri:", selectedSantri);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
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

        {/* Popup for Change Password */}
        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
              <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="currentPassword">Kata Sandi Saat Ini:</label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Masukkan kata sandi saat ini"
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
                    placeholder="Masukkan kata sandi baru"
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
                    placeholder="Konfirmasi kata sandi baru"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && <span className="text-red-500">{passwordError}</span>}
                </div>
                <div className="flex justify-end gap-4">
                  <button type="button" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    Simpan
                  </button>
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

        {/* Main Content */}
        <div className="p-4 font-poppins min-h-screen">
          <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Berita</h2>
              <button className="text-teal-600 font-bold text-l" onClick={openAddPostPopupTambah}>
                + Tambah Postingan
              </button>
            </div>
            <div className="space-y-2">
              {[
                { name: "Pelaksanaan Pengajian Malam Nuzulul Qur'an", photos: [fotoberita1] },
                { name: "Grup Rebana IPQOSH Unsiq Turut Memeriahkan Acara Nuzulul Qur'an", photos: [fotoberita2] },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    {item.photos.map((photo, photoIndex) => (
                      <img key={photoIndex} src={photo} alt="" className="w-12 h-12 mr-4 rounded-full" />
                    ))}
                    <span className="text-l font-semibold">{item.name}</span>
                  </div>
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
                    <button
                      onClick={() => {
                        setShowEditConfirmation(true);
                        setSelectedSantri(item);
                      }}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => {
                        setShowDeleteConfirmation(true);
                        setSelectedSantri(item);
                      }}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isAddPostPopupOpenTambah && (
          <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
              <h1 className="text-2xl font-bold mb-4 text-teal-600">Tambah Berita</h1>
              <div className="flex mb-4 space-x-4">
                <div className="w-1/3">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="photo">
                    Tambah Foto
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg h-80 w-80 flex justify-center items-center">
                    <span className="text-gray-500">Foto 1</span>
                  </div>
                </div>
                <div className="w-2/3 flex flex-col space-y-4">
                  <div className="w-full">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="title">
                      Judul Berita
                    </label>
                    <input id="title" type="text" className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan judul" />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date">
                      Tanggal
                    </label>
                    <input id="date" type="date" className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan tanggal" />
                  </div>
                  <div className="w-full flex space-x-4 items-end">
                    <div className="flex-grow">
                      <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="description">
                        Deskripsi
                      </label>
                      <textarea id="description" className="shadow appearance-none border rounded h-40 w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan deskripsi" />
                    </div>
                    <div className="flex space-x-4 mb-2">
                      <button className="border border-teal-600 text-teal-600 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Batal</button>
                      <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Unggah</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showDeleteConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-50"></div> {/* Gray overlay */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg font-bold w-80">
              <h2 className="mb-4">Apa Anda yakin ingin menghapus berita ini?</h2>
              <div className="flex flex-col">
                <button onClick={handleDelete} className="px-6 py-2 bg-red-600 text-white border border-gray-600 rounded mb-2">
                  Yakin
                </button>
                <div className="h-2"></div> {/* Space */}
                <button onClick={handleCancelDelete} className="px-6 py-2 bg-white text-black border border-gray-600 rounded">
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
        {showEditConfirmation && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
              <h2 className="text-2xl text-teal-600 font-bold mb-4">Edit Postingan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="judul" className="flex-shrink-0 w-24 text-gray-700 text-sm font-bold">
                    Judul
                  </label>
                  <input type="text" id="judul" className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={judul} onChange={handleJudulChange} />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="tanggal" className="flex-shrink-0 w-24 text-gray-700 text-sm font-bold">
                    Tanggal
                  </label>
                  <input type="date" id="tanggal" className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={tanggal} onChange={handleTanggalChange} />
                </div>
                <div className="flex items-center space-x-4">
                  <label htmlFor="deskripsi" className="flex-shrink-0 w-24 text-gray-700 text-sm font-bold">
                    Deskripsi
                  </label>
                  <textarea id="deskripsi" className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={deskripsi} onChange={handleDeskripsiChange} />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex-shrink-0 w-24 text-gray-700 text-sm font-bold" htmlFor="photo">
                    Tambah Foto
                  </label>
                  <input type="file" id="file" className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleFileChange} />
                </div>
                <div className="flex justify-end mt-6">
                  <button onClick={() => setShowEditConfirmation(false)} className="mr-2 text-teal-600 px-4 py-2 border border-gray-600 rounded-lg">
                    Batal
                  </button>
                  <button type="submit" className="px-4 py-2 text-white bg-teal-600 rounded-lg">
                    Perbarui
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBerita;
