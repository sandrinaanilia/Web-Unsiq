import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import foto9 from "../img/foto9.png";
import foto8 from "../img/foto8.jpg";
import foto7 from "../img/foto7.png";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleShowPopup1 = () => {
    setShowPopup1(true);
  };

  const handleClosePopup1 = () => {
    setShowPopup1(false);
  };

  const handleShowPopup2 = () => {
    setShowPopup2(true);
  };

  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };
  const activities = [
    { time: "03.00-04.30", activity: "Bangun Pagi & Qiyamul Lail" },
    { time: "03.00-04.30", activity: "Sholat Subuh berjamaah dilanjutkan setoran" },
    { time: "03.00-04.30", activity: "Sarapan" },
    { time: "03.00-04.30", activity: "Kuliah" },
    { time: "03.00-04.30", activity: "Sholat Maghrib, mujahadah & ngaji kitab" },
    { time: "03.00-04.30", activity: "Sholat Isya berjamaah" },
    { time: "03.00-04.30", activity: "Setoran Al-Qur’an" },
    { time: "03.00-04.30", activity: "Istirahat dan Tidur malam" },
  ];

  const activities1 = [{ activity: " Masa Ta’aruf" }, { activity: "Ziarah" }, { activity: " Tasmin" }, { activity: "Ro’an" }, { activity: "Muhadloroh" }, { activity: " Agenda Ramadhan" }];
  const activities2 = [{ activity: "Futsal    " }, { activity: "Tiroah" }, { activity: "Rebana" }];

  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-96 flex items-center justify-center">
        <div className="text-white text-center mt-9">
          <h1 className="font-bold text-5xl md:text-5xl py-2">Profil Pondok Pesantren Tahfidzul</h1>
          <h2 className="font-bold text-5xl md:text-5xl py-4">Qur'an Mahasiswa Unsiq II</h2>
        </div>
      </div>

      <section className="biografi py-12" id="biografi">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="biografi-content lg:w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-5">BIOGRAFI PENGASUH</h2>
            <h3 className="text-4xl mb-5 font-bold">Bpk K. Hayatuddin M.Ag., Alh</h3>
            <h4 classname="text-4xl text-gray mb-2">Beliau merupakan pengasuh di Pondok Pesantren Tahfidzul Qur’an Mahasiswa UNSIQ 2, dan salah satu lulusan terbaik di program Pascasarjana di Universitas Sains Alqur’an Wonosobo.</h4>
          </div>
          <div className="biografi-img lg:w-1/1">
            <img src={foto9} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="container px-20 mx-auto py-12 text-black">
        <h2 className="text-2xl font-extrabold mb-6 text-center">Sejarah PPTQ UNSIQ 2</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-teal-600 text-white rounded-2xl p-6">
          <img src={foto8} alt="Sejarah PPTQ UNSIQ 2" className="w-60 h-50 max-w-md rounded-2xl object-cover" />
          <div>
            <p className="text-white md:text-justify">
              Ide pendirian Ponpesma yang diperuntukkan bagi Mahasiswa sudah lama dipikirkan, yaitu sejak kepemimpinan Rektor pertama IIQ yaitu KH. Muntaha, Al-Hafidz. Tahun 1999, ketika berdiri Akademi Keperawatan IIQ, setiap mahasiswa
              Akper diwajibkan untuk tinggal di Asrama. Pada tahun 2007 UNSIQ mendapatkan bantuan bangunan Rusunawa lewat Direktorat Pekerjaan Umum RI. Bangunan tersebut kemudian dipergunakan untuk Ponpesma Putri UNSIQ, sampai saat ini
              jumlah santri kurang lebih 300 santri. Sepuluh tahun kemudian, pada tahun 2017 dibangunlah Rusunawa ke 2 di Kampus UNSIQ II di Krasak Mojotengah Wonosobo, Rusunawa tersebut digunakan untuk Pondok Pesantren Tahfiz Putra UNSIQ
              II. Pada bulan November 2018, Rusunawa sudah beroperasional sebagai Pondok Pesantren Tahfidzul Qur'an Putra UNSIQ II.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-24 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 ">
            <h2 className="text-3xl font-bold mb-4">Visi</h2>
            <p className="text-gray-700 mb-8">Terwujudnya pusat pemantapan akidah Islam Ahlussunah Wal jama’ah An-Nahdhiyah, pengembangan Ilmu-ilmu ke Al-Qur’anan, amal sholeh dan akhlak mulia bagi Mahasiswa UNSIQ.</p>
            <h2 className="text-3xl font-bold mb-4">Misi</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mengantarkan mahasiswa memiliki kemantapan akidah Ahlussunah Wal jama’ah An-Nahdhiyah dan kedalaman spiritual, keagungan akhlak, keluasan ilmu dan kematangan profesional.</li>
              <li>Mencetak generasi Tahfidz Al-Quran dan menjaga hafalan.</li>
              <li>Memperdalam Ilmu-ilmu Al-Quran.</li>
              <li>Berketrampilan dalam membaca kitab kuning, berbahasa Arab dan Inggris.</li>
            </ul>
          </div>
          <img src={foto7} alt="Foto PPTQ UNSIQ 2" className="h-auto max-w-xs md:max-w-lg lg:max-w-xl object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col items-end mt-10">
          <div className="justify-end grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
            <button onClick={handleShowPopup} className="font-bold bg-teal-600 text-white text-center py-4 px-8 rounded-lg cursor-pointer hover:bg-teal-700 w-full">
              AKTIVITAS HARIAN{" "}
            </button>
            <button onClick={handleShowPopup1} className="font-bold bg-teal-600 text-white text-center py-4 px-8 rounded-lg cursor-pointer hover:bg-teal-700 w-full">
              AKTIVITAS BULANAN{" "}
            </button>
          </div>
          <div className="w-full md:w-auto mt-4">
            <button onClick={handleShowPopup2} className="font-bold bg-teal-600 text-white text-center py-4 px-10 rounded-lg cursor-pointer hover:bg-teal-700 w-full">
              EKSTRAKULIKULER
            </button>
          </div>
        </div>
      </section>

      <section className="text-center py-8">
        <div className="bg-teal-600 text-white text-center py-8 rounded-2xl max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold">Daftar sekarang untuk Penerimaan Santri Baru</h2>
          <p className="text-2xl">Pondok Pesantren Tahfidzul Qur’an Mahasiswa UNSIQ 2 Tahun 2024 / 2025</p>
        </div>
      </section>

      {/* Pop-up untuk aktivitas harian */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h4 className="text-2xl font-bold text-black p-2">Informasi</h4>
            <h2 className="text-2xl font-bold mb-4">AKTIFITAS HARIAN</h2>
            <div className="overflow-y-auto max-h-96">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-bold text-gray-700 p-2">Waktu</th>
                    <th className="text-left font-bold text-gray-700 p-2">Aktivitas</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <tr key={index}>
                      <td className="text-left p-2">{activity.time}</td>
                      <td className="text-left p-2">{activity.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={handleClosePopup} className="bg-teal-600 text-white text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-teal-700">
              Tutup
            </button>
          </div>
        </div>
      )}
      {showPopup1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h4 className="text-2xl font-bold text-black p-2">Informasi</h4>
            <h2 className="text-2xl font-bold mb-4">AKTIVITAS BULANAN</h2>
            <div className="overflow-y-auto max-h-96">
              <table className="w-full">
                <tbody>
                  {activities1.map((activity, index) => (
                    <tr key={index}>
                      <td className="text-left p-2">{activity.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={handleClosePopup1} className="bg-teal-600 text-white text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-teal-700">
              Tutup
            </button>
          </div>
        </div>
      )}
      {showPopup2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h4 className="text-2xl font-bold text-black p-2">Informasi</h4>
            <h2 className="text-2xl font-bold mb-4">EKSTRAKULIKULER</h2>
            <div className="overflow-y-auto max-h-96">
              <table className="w-full">
                <tbody>
                  {activities2.map((activity, index) => (
                    <tr key={index}>
                      <td className="text-left p-2">{activity.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={handleClosePopup2} className="bg-teal-600 text-white text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-teal-700">
              Tutup
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default About;
