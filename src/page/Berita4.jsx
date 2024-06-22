import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import FotoBerita from "../img/foto berita.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const Berita4 = () => {
  return (
    <>
      <Navbar />
      <div className="bg-teal-600 h-80 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl">Berita Terbaru</h1>
      </div>
      <section className="news py-8">
        <div className="container mx-auto px-4">
          <div className="mx-4 lg:mx-20">
            <div className="p-6">
              <h5 className="text-teal-600 text-lg font-semibold">Terbaru</h5>
              <h3 className="text-2xl font-bold mt-2">PPTQ UNSIQ 2 BERHASIL MEMBAWA 2 PIALA DALAM RANGKA HARI SANTRI</h3>
              <div className="text-gray-600 mt-2 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-teal-600" />
                <span>22 Januari 2024</span>
                <FontAwesomeIcon icon={faClock} className="ml-4 mr-2 text-teal-600" />
                <span>1 bulan lalu</span>
              </div>
            </div>
            <img src={FotoBerita} alt="Berita PPTQ UNSIQ 2" className="w-3/4 h-auto mb-6 rounded-lg shadow-md mx-auto" />
            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/4 mx-auto">
              <div className="p-4 lg:p-6">
                <div className="berita text-gray-700">
                  <p>
                    Pada perayaan Hari Santri yang diperingati secara nasional, Pusat Pendidikan dan Pelatihan Qur'an (PPTQ) UNSIQ 2 meraih prestasi gemilang dengan memenangkan dua piala dalam kompetisi tingkat kabupaten. Kedua piala ini
                    berhasil diraih dalam dua kategori berbeda, menunjukkan keunggulan dan dedikasi yang luar biasa dari santri-santri yang terlibat. Dalam ajang perlombaan yang diadakan sebagai bagian dari peringatan Hari Santri, PPTQ
                    UNSIQ 2 berhasil menonjolkan keunggulan mereka dalam bidang tahfidz Al-Qur'an dan kegiatan kreatif seni. Dalam kategori tahfidz Al-Qur'an, para santri berhasil menampilkan hafalan yang memukau serta kefasihan dalam
                    membaca Al-Qur'an. Sedangkan dalam kategori seni, mereka memukau juri dengan kreativitas dan kualitas penampilan yang luar biasa.
                  </p>
                  <p className="mt-4">
                    Menurut Kepala PPTQ UNSIQ 2, Dr. Ahmad Fauzi, prestasi ini merupakan hasil dari kerja keras dan dedikasi yang tinggi dari seluruh tim dan santri. Ia menyatakan, "Kemenangan ini tidak hanya untuk PPTQ UNSIQ 2, tetapi juga
                    untuk seluruh santri dan pendukung yang telah memberikan dukungan tanpa henti. Ini adalah bukti nyata bahwa pendidikan Islam di Indonesia terus berkembang dan menghasilkan generasi yang unggul di berbagai bidang."
                    Prestasi gemilang ini juga mendapat apresiasi dari berbagai pihak, termasuk pemerintah daerah setempat dan masyarakat. Mereka menganggap prestasi ini sebagai cerminan dari semangat dan keuletan para santri dalam menjaga
                    dan mengembangkan nilai-nilai keislaman serta kebudayaan Indonesia. Dengan memenangkan dua piala dalam perayaan Hari Santri, PPTQ UNSIQ 2 telah menorehkan prestasi gemilang dalam dunia pendidikan Islam di Indonesia.
                    Keberhasilan ini menjadi inspirasi bagi institusi pendidikan lainnya untuk terus meningkatkan mutu pendidikan dan melahirkan generasi yang berprestasi serta berakhlak mulia.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Berita4;
