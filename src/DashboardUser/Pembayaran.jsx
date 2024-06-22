import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import DashboardUser from "../img/dashboarduser.png";
import PembayaranIcon from "../img/dollar.png";
import Pengaturan from "../img/setting.png";
import Keluar from "../img/keluar.png";
import Paper from "../img/paper.png";
import rincianbiaya from "../img/syarat-biaya.pdf";

const Pembayaran = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [profilePicture, setProfilePicture] = useState(DashboardUser);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleAccountClick = () => {
    alert("Nomor rekening BCA: 356373738833338");
  };

  const handleDetailsClick = () => {
    window.open(rincianbiaya, "_blank");
  };

  const handleUploadBuktiPembayaran = () => {
    fileInputRef.current.click();
  };

  const handleHapusAkun = () => {
    setShowPopup(true);
  };

  const handleConfirmHapus = () => {
    // Add logic to delete account here
    alert("Akun Anda akan dihapus.");
    setShowPopup(false);
  };

  const handleCancelHapus = () => {
    setShowPopup(false);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.status === 200) {
          setUploadStatus('Upload successful');
          setIsFileUploaded(true);
        } else {
          setUploadStatus('Upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setUploadStatus('Upload failed');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-8 px-10 min-h-screen">
        <div className="mb-10 mt-20 item-center">
          <div className="bg-white mb-5 mr-10 shadow-xl rounded-xl flex items-center p-4">
            <div className="relative w-16 h-16">
              <img src={profilePicture} alt="Profile" className="rounded-full w-16 h-16 object-cover" />
              <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept="image/*" />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border cursor-pointer" onClick={handleUploadBuktiPembayaran}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
                      <img src={PembayaranIcon} alt="Pembayaran" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pembayaran</span>
                    </button>
                  </li>
                  <li>
                    <button
                      className={`flex items-center py-2 px-8 mt-3 w-full text-left ${
                        window.location.pathname === "/pengaturanprofil" ? "bg-teal-600 text-white" : "text-gray-600"
                      } hover:bg-teal-600 hover:text-white rounded-lg justify-start`}
                      onClick={() => window.location.assign("/pengaturan")}
                    >
                      <img src={Pengaturan} alt="Pengaturan Profil" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Pengaturan Profil</span>
                    </button>
                  </li>
                  <li>
                    <button className={`flex items-center py-2 px-8 mt-3 w-full text-left ${showPopup ? "bg-teal-600 text-white" : "text-gray-600"} hover:bg-teal-600 hover:text-white rounded-lg justify-start`} onClick={handleHapusAkun}>
                      <img src={Keluar} alt="Keluar" className="w-6 h-6 mr-4" />
                      <span className="font-bold">Keluar</span>
                    </button>
                    {showPopup && (
                      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                        <div className="bg-white rounded-3xl shadow-lg p-10 w-96">
                          <h2 className="text-xl text-center font-bold mb-4">Keluar dari Akun Anda?</h2>
                          <div className="flex justify-center">
                            <button className="border border-gray-400 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded mr-3" onClick={handleCancelHapus}>
                              Tidak
                            </button>
                            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded" onClick={handleConfirmHapus}>
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
            <h1 className="text-base font-bold">Upload dan klik Simpan Perubahan </h1>
          </div>
          <div className="bg-white p-6 mt-5 rounded-xl min-h-screen shadow-md">
            <h1 className="ml-0 text-xl font-bold text-black">Admin UNSIQ II</h1>
            <h4 className="text-gray-500 mb-2">04 Mei 2024</h4>
            <p>
              Untuk calon santri 2024/2025 silahkan membayar daftar ulang paling lambat Senin, 19 Agustus 2024 untuk biaya daftar ulang silahkan transfer ke no rek BCA berikut{" "}
              <button onClick={handleAccountClick} className="text-teal-600 font-bold">
                356373738833338
              </button>
              .
            </p>
            <p>
              Untuk rincian biaya bisa lihat{" "}
              <button onClick={handleDetailsClick} className="text-teal-600 font-bold">
                disini
              </button>
            </p>

            <button className="mt-4 bg-teal-600 text-white shadow-xl px-4 py-2 rounded-md flex items-center justify-center" onClick={handleUploadBuktiPembayaran}>
              {isFileUploaded ? "Bukti Pembayaran" : "Upload Bukti Pembayaran"}
            </button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
            {uploadStatus && <p className="mt-2 text-red-500">{uploadStatus}</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pembayaran;
