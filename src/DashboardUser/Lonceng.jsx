import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../img/dashboarduser.png";
import Pembayaran from "../img/dollar.png";
import Pengaturan from "../img/setting.png";
import Keluar from "../img/keluar.png";
import Paper from "../img/paper.png";


const Lonceng = () => {
  const navigate = useNavigate();
  const [isRead, setIsRead] = useState({
    
    announcement1: false,
    announcement2: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [profilePicture, setProfilePicture] = useState(DashboardUser);
  const fileInputRef = useRef(null);

  const handleHapusAkun = () => {
    setShowPopup(true);
  };

  const handleConfirmHapus = () => {
    // Tambahkan logika untuk menghapus akun di sini
    alert("Akun Anda akan dihapus.");
    setShowPopup(false);
    
  };

  const handleCancelHapus = () => {
    setShowPopup(false);
  };
  const handleRead = (announcement) => {
    setIsRead((prevState) => ({
      ...prevState,
      [announcement]: true,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
    <div className="flex justify-center py-8 px-10 min-h-screen">
        <div className="mb-10 mt-20 item-center">
          <div className="bg-white mb-5 mr-10 shadow-xl rounded-xl flex items-center p-4">
            <div className="relative w-16 h-16">
              <img
                src={profilePicture}
                alt="Profile"
                className="rounded-full w-16 h-16 object-cover"
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              <div
                className="absolute bottom-0 right-0 bg-white p-1 rounded-full border cursor-pointer"
                onClick={handleProfilePictureChange}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
      <div className="ml-4">
        <span className="text-xl font-bold text-gray-800">Farhan Alamsyah</span>
      </div>
    </div>
  
      <div className="flex">
        <div className="w-1/8 bg-white shadow-xl rounded-lg mr-10 flex flex-col max-h-96">
          <nav className="p-6">
            <ul>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                    window.location.pathname === "/formulirpendaftaran" ? "bg-teal-600 text-white" : "text-gray-600"
                  } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/formulirpendaftaran")}
                >
                  <img src={Paper} alt="Formulir Pendaftaran" className="w-6 h-6 mr-4" />
                  <span className="font-bold">Formulir Pendaftaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pembayaran" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/pembayaran")}
                >
                  <img src={Pembayaran} alt="Pembayaran" className="w-6 h-6 mr-4" />
                  <span className="font-bold">Pembayaran</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center py-2 px-8 mt-3 w-full text-left ${window.location.pathname === "/pengaturan" ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                  onClick={() => window.location.assign("/pengaturan")}
                >
                  <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-4" />
                  <span className="font-bold">Pengaturan Profil</span>
                </button>
              </li>
              <li>
              <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${showPopup ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={handleHapusAkun}
                    >
                      <img src={Keluar} alt="Keluar" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Keluar</span>
                    </button>
                    {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                  <div className="bg-white rounded-3xl shadow-lg p-10 w-96">
                    <h2 className="text-xl text-center font-bold mb-4">
                      Keluar dari Akun Anda?
                    </h2>    
                    <div className="flex justify-center">
                   
                     <button
                          className="border border-gray-400 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded mr-3"
                          onClick={handleCancelHapus}
                        >
                          Tidak
                        </button>
                        <button
                          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded"
                          onClick={handleConfirmHapus}
                        >
                          Keluar
                        </button>
                      </div>
                      </div>
                      </div>
                    )}
              </li>
            </ul>
          </nav>
        </div>
        </div>
        </div>
        <div className="w-3/4 mx-auto mt-20">
  <div className="bg-teal-600 text-white text-left py-5 px-4 rounded-xl">
    <h1 className="text-base font-bold">Pengumuman</h1>
  </div>
<div className="bg-white p-6 mt-5 rounded-xl min-h-screen shadow-md">            
            <div className="flex justify-end mb-4">
              <span className="text-teal-600 text-base font-bold">Sudah Dibaca</span>
            </div>
            <div className="w-full p-4 bg-white">
              <button className={`rounded-xl p-4 w-full text-left ${isRead.announcement1 ? "bg-white text-black" : "bg-teal-50"}`} onClick={() => handleRead("announcement1")}>
                <div className="flex flex-col items-start py-1 px-1 ">
                  <span>Silahkan lakukan pembayaran daftar ulang dan upload bukti pembayaran sebelum 20 Mei 2024</span>
                  <span className="text-teal-600 text-sm mt-2">20 Juni, 09:10</span>
                </div>
              </button>
            </div>
            <div className="w-full p-4 bg-white">
              <button className={`rounded-xl p-4 w-full text-left ${isRead.announcement2 ? "bg-white text-black" : "bg-teal-50"}`} onClick={() => handleRead("announcement2")}>
                <div className="flex flex-col items-start py-1 px-1">
                  <span>Pendaftaran Anda Sudah Berhasil</span>
                  <span className="text-teal-600 text-sm mt-4">20 Juni, 09:10</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lonceng;
