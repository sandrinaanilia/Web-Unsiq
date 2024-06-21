import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import berita from "../assets/img/berita.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const BeritaBesar = () => {
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
              <h3 className="text-2xl font-bold mt-2">PELAKSANAAN PENGAJIAN MALAM NUZULUL QUR'AN</h3>
              <div className="text-gray-600 mt-2 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-teal-600" />
                <span>28 Maret 2024</span>
                <FontAwesomeIcon icon={faClock} className="ml-4 mr-2 text-teal-600" />
                <span>2 bulan lalu</span>
              </div>
            </div>
            <img src={berita} alt="Berita PPTQ UNSIQ 2" className="w-3/4 h-auto mb-6 rounded-lg shadow-md mx-auto" />
            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/4 mx-auto">
              <div className="p-4 lg:p-6">
                <div className="berita text-gray-700">
                  <p>
                    Pada malam Nuzulul Qur'an yang penuh berkah, Pondok Pesantren Mahasiswa UNSIQ 2 mengadakan pengajian spesial yang dihadiri oleh para santri, pengajar, dan masyarakat sekitar. Acara ini dimulai dengan pembacaan ayat-ayat
                    suci Al-Qur'an yang menggema di seluruh lingkungan pesantren, menambah kesakralan suasana malam itu. Penceramah utama, Ustadz Dr. H. Ahmad Syukri, M.Ag., menyampaikan tausiyah tentang pentingnya memahami dan mengamalkan
                    nilai-nilai Al-Qur'an dalam kehidupan sehari-hari. Beliau menekankan bahwa malam Nuzulul Qur'an merupakan momen istimewa untuk meningkatkan ketakwaan dan memperdalam kecintaan terhadap Al-Qur'an. Dalam pengajian
                    tersebut, para santri juga diberikan kesempatan untuk bertanya dan berdiskusi langsung dengan penceramah, menciptakan interaksi yang dinamis dan penuh hikmah. Selain tausiyah, acara ini juga dimeriahkan dengan lantunan
                    shalawat dan doa bersama yang dipimpin oleh kyai pesantren, mengiringi setiap rangkaian kegiatan dengan penuh khidmat. Tidak hanya itu, kegiatan ini juga diakhiri dengan sesi muhasabah, di mana para peserta diajak untuk
                    merenungi perjalanan spiritual mereka selama ini dan berkomitmen untuk terus memperbaiki diri. Pengajian malam Nuzulul Qur'an di Pondok Pesantren Mahasiswa UNSIQ 2 ini menjadi momentum berharga bagi semua yang hadir,
                    memperkuat ikatan ukhuwah islamiyah di antara para santri dan masyarakat sekitar. Kegiatan ini diharapkan dapat menginspirasi para santri untuk terus belajar dan mengamalkan ajaran-ajaran Al-Qur'an dengan penuh
                    keikhlasan dan kesungguhan hati.
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

export default BeritaBesar;
