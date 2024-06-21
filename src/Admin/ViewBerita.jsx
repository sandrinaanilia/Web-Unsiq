import React, { useState } from "react";
import arrow from "../assets/img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../assets/img/hamam.png";
import searchIcon from "../assets/img/search.png";
import fotoberitabaru from "../assets/img/berita4.jpg";

const ViewBerita = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full overflow-x-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex items-center cursor-pointer">
            <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
            <span className="text-black">Abdurohman Hamam</span>
            <img src={arrow} alt="Dropdown Arrow" className="w-2 h-2 rotate-180 ml-2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-x-auto">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Berita</h1>
          </header>
          <main className="mt-8">
            <article className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-teal-600">Terbaru</h2>
              <h3 className="text-xl font-bold mb-4">PPTQ UNSIQ 2 BERHASIL MEMBAWA 2 PIALA DALAM RANGKA HARI SANTRI</h3>
              <div className="flex items-center mb-4">
                <span className="text-gray-600">22 Oktober 2023</span>
                <span className="ml-4 text-gray-600">hari ini</span>
              </div>
              <img src={fotoberitabaru} alt="News" className="w-full h-auto mb-4" />
              <p>
                Pada perayaan Hari Santri yang diperingati secara nasional, Pusat Pendidikan dan Pelatihan Qur'an UNSIQ 2 meraih prestasi gemilang dengan memenangkan dua piala dalam kompetisi tingkat kabupaten. Kedua piala ini berhasil
                diraih dalam dua kategori berbeda, menunjukkan keunggulan dan dedikasi yang luar biasa dari santri-santri yang terlibat. Dalam ajang perlombaan yang diadakan sebagai bagian dari peringatan Hari Santri, PPTQ UNSIQ 2 berhasil
                menonjolkan keunggulan mereka dalam bidang tahfidz Al-Qur'an dan kegiatan kreatif seni. Dalam kategori tahfidz Al-Qur'an, para santri berhasil menampilkan hafalan yang memukau serta kefasihan dalam membaca Al-Qur'an.
                Sedangkan dalam kategori seni, mereka memukau juri dengan kreativitas dan kualitas penampilan yang luar biasa.
              </p>
              <br />
              <p>
                Menurut Kepala PPTQ UNSIQ 2, Dr. Ahmad Fauzi, prestasi ini merupakan hasil dari kerja keras dan dedikasi yang tinggi dari seluruh tim dan santri. Ia menyatakan, "Kemenangan ini tidak hanya untuk PPTQ UNSIQ 2, tetapi juga
                untuk seluruh santri dan pendukung yang telah memberikan dukungan tanpa henti. Ini adalah bukti nyata bahwa pendidikan Islam di Indonesia terus berkembang dan menghasilkan generasi yang unggul di berbagai bidang. "Prestasi
                gemilang ini juga mendapat apresiasi dari berbagai pihak, termasuk pemerintah daerah setempat dan masyarakat. Mereka menganggap prestasi ini sebagai cerminan dari semangat dan keuletan para santri dalam menjaga dan
                mengembangkan nilai-nilai keislaman serta kebudayaan Indonesia. Dengan memenangkan dua piala dalam perayaan Hari Santri, PPTQ UNSIQ 2 telah menorehkan prestasi gemilang dalam dunia pendidikan Islam di Indonesia. Keberhasilan
                ini menjadi inspirasi bagi institusi pendidikan lainnya untuk terus meningkatkan mutu pendidikan dan melahirkan generasi yang berprestasi serta berakhlak mulia.
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ViewBerita;
