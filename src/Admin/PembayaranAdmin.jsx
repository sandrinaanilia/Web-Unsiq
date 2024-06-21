import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PembayaranAdmin = () => {
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
  const [payments, setPayments] = useState([
    {
      id: 1,
      text: "Untuk calon santri 2024/2025 silahkan membayar daftar ulang maksimal Senin, 20 Mei 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut 356373738833338. Untuk rincian biaya bisa lihat di sini",
      date: "10 Mei 2024",
    },
  ]);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState(null);
  const [newPaymentText, setNewPaymentText] = useState("");
  const [newPaymentDate, setNewPaymentDate] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [paymentToDelete, setPaymentToDelete] = useState(null);

  const handleDelete = () => {
    console.log("Deleting santri:", selectedSantri);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const navigate = useNavigate();

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

  const handleEditPayment = (payment) => {
    setCurrentPayment(payment);
    setNewPaymentText(payment.text);
    setNewPaymentDate(payment.date);
    setIsEditPopupOpen(true);
  };

  const handleDeletePayment = (paymentId) => {
    setPayments(payments.filter((pay) => pay.id !== paymentId));
    setShowDeleteConfirmation(false);
  };

  const handleAddPayment = () => {
    setCurrentPayment(null);
    setNewPaymentText("");
    setNewPaymentDate("");
    setIsEditPopupOpen(true);
  };

  const handleSavePayment = (e) => {
    e.preventDefault();
    if (currentPayment) {
      setPayments(payments.map((pay) => (pay.id === currentPayment.id ? { ...pay, text: newPaymentText, date: newPaymentDate } : pay)));
    } else {
      const newPayment = {
        id: payments.length + 1,
        text: newPaymentText,
        date: newPaymentDate,
      };
      setPayments([...payments, newPayment]);
    }
    setIsEditPopupOpen(false);
  };

  const handleConfirmDelete = (paymentId) => {
    setPaymentToDelete(paymentId);
    setShowDeleteConfirmation(true);
  };

  const viewPaymentProof = () => {
    navigate("/lihatbukti");
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
                <span style={{ backgroundColor: "teal-600", padding: "0.2rem 0.5rem", borderRadius: "3rem", color: "Black" }}>Pembayaran</span>
              </h1>
            </div>
            <button className="text-teal-600 font-bold mb-4" onClick={handleAddPayment} style={{ display: "block", textAlign: "right" }}>
              + Tambah Pembayaran
            </button>
            <div className="space-y-2">
              <div className="space-y-4">
                {payments.map((pay) => (
                  <div key={pay.id} className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <p className="text-black font-bold">{pay.date}</p>
                    </div>
                    <p className="text-black">{pay.text}</p>
                    <div className="flex justify-between">
                      <button onClick={viewPaymentProof} className="bg-teal-600 text-white px-4 py-2 rounded-md">
                        Lihat Bukti Pembayaran
                      </button>
                      <div className="flex space-x-4">
                        <button onClick={() => handleEditPayment(pay)} className="bg-green-500 text-white px-2 py-1 rounded">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={() => handleConfirmDelete(pay.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-bold mb-1">
                    Nama:
                  </label>
                  <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold mb-1">
                    Email:
                  </label>
                  <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label htmlFor="address" className="block font-bold mb-1">
                    Alamat:
                  </label>
                  <input type="text" id="address" name="address" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-teal-500 text-white px-4 py-2 rounded" onClick={closePopup}>
                    Tutup
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="notifications" className="block font-bold mb-1">
                    Notifikasi:
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="notifications" className="mr-2" />
                      Aktifkan
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="notifications" className="mr-2" />
                      Nonaktifkan
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="privacy" className="block font-bold mb-1">
                    Privasi:
                  </label>
                  <select id="privacy" name="privacy" className="w-full p-2 border border-gray-300 rounded">
                    <option value="public">Publik</option>
                    <option value="private">Pribadi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="language" className="block font-bold mb-1">
                    Bahasa:
                  </label>
                  <select id="language" name="language" className="w-full p-2 border border-gray-300 rounded">
                    <option value="indonesian">Bahasa Indonesia</option>
                    <option value="english">English</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-teal-500 text-white px-4 py-2 rounded" onClick={closeSettingsPopup}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Keluar</h2>
              <p>Apakah Anda yakin ingin keluar?</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeLogoutPopup}>
                  Batal
                </button>
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}

        {isChangePasswordOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Ganti Kata Sandi</h2>
              <form onSubmit={handleChangePassword}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block font-bold mb-1">
                      Kata Sandi Saat Ini:
                    </label>
                    <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block font-bold mb-1">
                      Kata Sandi Baru:
                    </label>
                    <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block font-bold mb-1">
                      Konfirmasi Kata Sandi Baru:
                    </label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                  </div>
                  {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <div className="flex justify-end mt-4">
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
                    Ganti Kata Sandi
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isEditPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">{currentPayment ? "Edit Pembayaran" : "Tambah Pembayaran"}</h2>
              <form onSubmit={handleSavePayment}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="paymentText" className="block font-bold mb-1">
                      Teks Pembayaran:
                    </label>
                    <textarea id="paymentText" value={newPaymentText} onChange={(e) => setNewPaymentText(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <label htmlFor="paymentDate" className="block font-bold mb-1">
                      Tanggal Pembayaran:
                    </label>
                    <input type="date" id="paymentDate" value={newPaymentDate} onChange={(e) => setNewPaymentDate(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
                    Simpan
                  </button>
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded ml-2" onClick={() => setIsEditPopupOpen(false)}>
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-50"></div> {/* Gray overlay */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg font-bold w-80">
              <h2 className="mb-4">Apa Anda yakin ingin menghapus pembayaran ini?</h2>
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
      </div>
    </div>
  );
};

export default PembayaranAdmin;
