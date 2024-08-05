import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import iconwa from "../img/iconwa.png";
import iconpanah from "../img/iconpanah.png";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/089601060186', '_blank'); 
  };

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqItems = [
    {
      question: "Berapa biaya daftar ulang di PPTQ Mahasiswa UNSIQ 2?",
      answer: "Untuk Biaya di tahun Ajaran 2024/2025 sebesar Rp. 1.500.000",
    },
    {
      question: "Kapan dibuka Pendaftaran Santri baru di PPTQ Mahasiswa UNSIQ 2?",
      answer: "Pendaftaran dibuka mulai tanggal 1 Januari 2024 hingga 30 Agustus 2024.",
    },
    {
      question: "Dimana lokasi PPTQ Mahasiswa UNSIQ 2?",
      answer: "Lokasi PPTQ Mahasiswa UNSIQ 2 berada di Desa Krasak, Kec.Mojotengah, Kab.Wonosobo.",
    },
    {
      question: "Program apa saja yang ada di PPTQ Mahasiswa UNSIQ 2?",
      answer: "PPTQ Mahasiswa UNSIQ 2 menawarkan program tahfidz Al-Quran, kajian kitab kuning, dan bahasa Arab.",
    },
    {
      question: "Apakah di PPTQ Mahasiswa UNSIQ 2 membuka bagi mahasiswa Reguler non beasiswa?",
      answer: "Ya, PPTQ Mahasiswa UNSIQ 2 juga membuka pendaftaran bagi mahasiswa reguler non beasiswa.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl text-center">FAQ</h1>
      </div>
      <div className="flex-1 p-5">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-10 border border-gray-400 rounded">
            <label className="flex items-center justify-between w-full p-3 cursor-pointer" onClick={() => toggleExpansion(index)}>
              {item.question}
              <img
                src={iconpanah}
                alt="Toggle"
                width="20px"
                height="20px"
                className={`ml-auto transform transition-transform ${expanded === index ? 'rotate-180' : ''}`}
              />
            </label>
            {expanded === index && (
              <div className="p-3 border-t border-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={handleWhatsAppClick}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-3xl focus:outline-none focus:shadow-outline flex items-center"
          >
            Hubungi kami
            <img src={iconwa} alt="WhatsApp" width="30px" height="30px" className="ml-2" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
