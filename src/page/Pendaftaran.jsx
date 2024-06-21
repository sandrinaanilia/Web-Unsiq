import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import icon from "../assets/img/iconpopup.png";
import brosur from "../assets/img/brosur.pdf";
import syarat from "../assets/img/syarat-biaya.pdf";
import materi from "../assets/img/materitest.pdf";

function Pendaftaran() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  const handleFormClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleButtonClick = (button) => {
    setClickedButton(button);
    setTimeout(() => {
      setClickedButton("");
      setIsFormVisible(false);
    }, 300);
  };

  return (
    <>
      <Navbar />

      <div className="bg-teal-600 h-96 flex items-center justify-center">
        <div className="text-white text-center mt-9">
          <h1 className="font-bold text-6xl md:text-5xl py-2">Informasi Pendaftaran</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-16 lg:px-40 py-8 md:py-16">
        <h1 className="text-4xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          Telah Dibuka Penerimaan Santri Baru Pondok Pesantren
          <br />
          Tahfidzul Qur'an Mahasiswa UNSIQ 2 Tahun 2024 / 2025
        </h1>
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Wajib Dibaca Sebelum Melakukan Pendaftaran!</h3> <br />
            <p>Syarat utama : Sudah Resmi Menjadi Mahasiswa UNSIQ 2</p>
            <p>
              Brosur Pondok Pesantren lihat{" "}
              <a href={brosur} className="text-teal-600 underline font-bold">
                disini
              </a>
            </p>
            <p>
              Informasi Syarat pendaftaran dan rincian biaya bisa lihat{" "}
              <a href={syarat} className="text-teal-600 underline font-bold">
                disini
              </a>
            </p>
            <p>
              Materi test (Reguler) lihat{" "}
              <a href={materi} className="text-teal-600 underline font-bold">
                disini
              </a>
            </p>
            <p>
              Surat Pernyataan lihat{" "}
              <a href="#" className="text-teal-600 underline font-bold">
                disini
              </a>
            </p>
          </div>
          <h2 className="text-xl font-bold mb-4">ALUR PENDAFTARAN</h2>
          <ol className="list-decimal list-inside mb-8 space-y-1">
            <li>Silahkan mengunduh dokumen di atas dan memahami alur pendaftaran</li>
            <li>Silahkan mengunduh surat pernyataan, lalu lengkapi untuk di unggah di formulir pendaftaran</li>
            <li>Buat akun baru dengan klik tombol "Masuk" atau klik "Isi Formulir"</li>
            <li>Login dengan memasukkan email dan password yang telah dibuat</li>
            <li>Isi formulir pendaftaran dengan lengkap dengan tekan tombol "Formulir pendaftaran" pada akun profil lalu klik "Simpan Perubahan"</li>
            <li>Proses pendaftaran selesai, informasi lebih lanjut bisa dilihat melalui fitur notifikasi lonceng</li>
          </ol>
          <div className="flex justify-center">
            <button onClick={handleFormClick} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
              {isFormVisible ? "Tutup Formulir" : "Isi Formulir"}
            </button>
          </div>
          {isFormVisible && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-96 relative">
                <button onClick={handleFormClick} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                  &times;
                </button>
                <form className="space-y-4">
                  <img src={icon} alt="icon pop-up" className="mx-auto mb-4" />
                  <label className="block text-gray-700 text-center font-bold">Anda harus masuk akun terlebih dahulu untuk isi formulir</label>
                  <a href="/login" className="block w-full">
                    <button
                      type="button"
                      onClick={() => handleButtonClick("Masuk")}
                      className={`border-2 border-gray-300 w-full ${
                        clickedButton === "Masuk" ? "bg-teal-600 text-white" : "bg-white text-black"
                      } hover:bg-teal-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    >
                      Masuk
                    </button>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleButtonClick("Tutup")}
                    className={`border-2 border-gray-300 w-full ${
                      clickedButton === "Tutup" ? "bg-teal-600 text-white" : "bg-white text-black"
                    } hover:bg-teal-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  >
                    Tutup
                  </button>
                  <p className="text-center text-gray-600">
                    Belum memiliki akun?{" "}
                    <a href="/register" className="font-bold text-teal-600">
                      Daftar disini!
                    </a>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pendaftaran;
