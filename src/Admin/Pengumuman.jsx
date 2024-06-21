import React, { useState } from "react";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import arrow from "../assets/img/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Pengumuman = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Silakan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 Mei 2024", date: "2024-05-04", autoMessage: "Pesan Otomatis" },
    { id: 2, text: "Pendaftaran Anda sudah berhasil", date: "2024-05-04", autoMessage: "Pesan Otomatis" },
  ]);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [newAnnouncementText, setNewAnnouncementText] = useState("");
  const [newAnnouncementDate, setNewAnnouncementDate] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openProfilePopup = () => {
    setIsProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setIsProfilePopupOpen(false);
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

  const openChangePassword = () => {
    setIsChangePasswordOpen(true);
  };

  const closeChangePassword = () => {
    setIsChangePasswordOpen(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
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

  const handleEditAnnouncement = (announcement) => {
    setCurrentAnnouncement(announcement);
    setNewAnnouncementText(announcement.text);
    setNewAnnouncementDate(announcement.date);
    setIsEditPopupOpen(true);
  };

  const handleDeleteAnnouncement = (announcementId) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== announcementId));
    setShowDeleteConfirmation(false);
  };

  const handleAddAnnouncement = () => {
    setCurrentAnnouncement(null);
    setNewAnnouncementText("");
    setNewAnnouncementDate("");
    setIsEditPopupOpen(true);
  };

  const handleSaveAnnouncement = (e) => {
    e.preventDefault();

    if (currentAnnouncement) {
      setAnnouncements(announcements.map((ann) => (ann.id === currentAnnouncement.id ? { ...ann, text: newAnnouncementText, date: newAnnouncementDate } : ann)));
    } else {
      const newAnnouncement = {
        id: announcements.length + 1,
        text: newAnnouncementText,
        date: newAnnouncementDate,
        autoMessage: "Pesan Otomatis",
      };
      setAnnouncements([...announcements, newAnnouncement]);
    }
    setIsEditPopupOpen(false);
  };

  const handleConfirmDelete = (announcementId) => {
    setAnnouncementToDelete(announcementId);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
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
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openProfilePopup}>
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
                <span style={{ backgroundColor: "teal-600", padding: "0.2rem 0.5rem", borderRadius: "3rem", color: "black" }}>Pengumuman</span>
              </h1>
            </div>
            <button className="text-teal-600 font-bold mb-4" onClick={handleAddAnnouncement} style={{ display: "block", textAlign: "right" }}>
              + Tambah Pengumuman
            </button>
            <div className="space-y-2">
              <div className="space-y-4">
                {announcements.map((ann) => (
                  <div key={ann.id} className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                      <p>{ann.text}</p>
                      <p className="text-sm text-black font-bold mb-4">{ann.date}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button onClick={() => handleEditAnnouncement(ann)} className="bg-green-500 text-white px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button onClick={() => handleConfirmDelete(ann.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isProfilePopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Nama Lengkap:</label>
                  <input type="text" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value="Abdurohman Hamam" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Email:</label>
                  <input type="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value="Abdurohman@gmail.com" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Nomor Telepon:</label>
                  <input type="text" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value="08977654323" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Jabatan:</label>
                  <input type="text" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value="Sekertaris 2" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="kataSandi">Kata Sandi:</label>
                  <input type="password" id="kataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="*********" value="Abd*******98" readOnly />
                </div>

                <button type="button" className="bg-teal-500 text-white px-4 py-2 rounded mt-4" onClick={closeProfilePopup}>
                  Simpan
                </button>
              </form>
            </div>
          </div>
        )}

        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
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
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={openChangePassword}>
                    Ubah Kata Sandi
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={closeSettingsPopup}>
                    Kembali
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
                    navigate("/");
                    <a href="/beranda" className="font-bold text-teal-600"></a>;
                  }}
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}
        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
              <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label>Kata Sandi Saat Ini:</label>
                  <input type="password" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Kata Sandi Baru:</label>
                  <input type="password" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Konfirmasi Kata Sandi Baru:</label>
                  <input type="password" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <div className="flex justify-end gap-4 mt-4">
                  <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded" onClick={closeChangePassword}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isEditPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">{currentAnnouncement ? "Edit Pengumuman" : "Tambah Pengumuman"}</h2>
              <form onSubmit={handleSaveAnnouncement} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label>Pengumuman:</label>
                  <input type="text" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={newAnnouncementText} onChange={(e) => setNewAnnouncementText(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Tanggal:</label>
                  <input type="date" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" value={newAnnouncementDate} onChange={(e) => setNewAnnouncementDate(e.target.value)} />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded" onClick={() => setIsEditPopupOpen(false)}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
              <p>Apakah Anda yakin ingin menghapus pengumuman ini?</p>
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={() => setShowDeleteConfirmation(false)}>
                  Batal
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteAnnouncement(announcementToDelete)}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pengumuman;
