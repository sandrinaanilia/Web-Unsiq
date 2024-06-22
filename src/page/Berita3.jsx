import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import berita3 from "../img/berita3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const Berita3 = () => {
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
              <h3 className="text-2xl font-bold mt-2">HALAL BIHALAL & TASYAKURAN PONDOK PESANTREN UNSIQ 2</h3>
              <div className="text-gray-600 mt-2 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-teal-600" />
                <span>07 Mei 2024</span>
                <FontAwesomeIcon icon={faClock} className="ml-4 mr-2 text-teal-600" />
                <span>2 bulan lalu</span>
              </div>
            </div>
            <img src={berita3} alt="Berita PPTQ UNSIQ 2" className="w-3/4 h-auto mb-6 rounded-lg shadow-md mx-auto" />
            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/4 mx-auto">
              <div className="p-4 lg:p-6">
                <div className="berita text-gray-700">
                  <p>
                    Suasana penuh kebersamaan dan syukur melingkupi Pondok Pesantren Mahasiswa UNSIQ 2 pada hari Minggu, 26 Mei 2024, saat digelarnya acara Halal Bihalal dan Tasyakuran. Acara ini diadakan sebagai bentuk rasa syukur atas
                    kelancaran ibadah di bulan Ramadhan dan Hari Raya Idul Fitri, serta sebagai momentum untuk mempererat tali silaturahmi di antara para santri, pengurus, dan masyarakat sekitar. Acara dimulai pada pukul 08.00 WIB di Aula
                    Utama Pondok Pesantren Mahasiswa UNSIQ 2, dihadiri oleh seluruh santri, pengurus pondok, para alumni, serta undangan dari tokoh masyarakat dan keluarga santri. Diawali dengan pembacaan ayat suci Al-Quran, suasana acara
                    segera terasa khidmat dan penuh makna. Dalam sambutannya, Pimpinan Pondok Pesantren Mahasiswa UNSIQ 2, Ustadz H. Ahmad Fauzi, M.A., menyampaikan rasa syukur dan terima kasih kepada seluruh pihak yang telah berkontribusi
                    dalam kelancaran acara ini. "Halal Bihalal ini bukan hanya sekadar tradisi, namun merupakan momen penting untuk mempererat ukhuwah Islamiyah di antara kita. Semoga acara ini menjadi sarana untuk saling memaafkan dan
                    memperkokoh hubungan kekeluargaan di lingkungan pondok," ujarnya. Selain sambutan dari pimpinan pondok, acara juga diisi dengan tausiyah oleh Ustadz Dr. H. Muhammad Arifin, Lc., yang mengangkat tema "Makna Halal Bihalal
                    dalam Kehidupan Sehari-hari". Dalam tausiyahnya, beliau menekankan pentingnya memelihara silaturahmi dan saling memaafkan sebagai cerminan dari nilai-nilai Islam yang luhur.
                  </p>
                  <p className="mt-4">
                    Setelah tausiyah, acara dilanjutkan dengan sesi ramah tamah dan santap siang bersama. Hidangan khas Idul Fitri seperti ketupat, opor ayam, rendang, dan berbagai kue tradisional turut memeriahkan suasana. Para santri dan
                    tamu undangan menikmati hidangan sambil berbincang-bincang penuh keakraban.Sebagai bagian dari rangkaian acara, dilakukan juga sesi tasyakuran atas pencapaian prestasi para santri selama setahun terakhir. Beberapa santri
                    yang berprestasi dalam bidang akademik dan non-akademik diberikan penghargaan sebagai bentuk apresiasi dan motivasi untuk terus berprestasi. Acara Halal Bihalal dan Tasyakuran ditutup dengan doa bersama yang dipimpin
                    oleh Ustadz H. Ahmad Fauzi, M.A., memohon keberkahan dan kemudahan dalam menjalani kegiatan di masa mendatang. Seluruh hadirin mengamini doa dengan khusyuk, berharap agar Pondok Pesantren Mahasiswa UNSIQ 2 senantiasa
                    menjadi tempat yang membawa kebaikan dan manfaat bagi semua pihak. Dengan berlangsungnya acara ini, diharapkan semangat kebersamaan dan rasa syukur dapat terus terjaga, serta menjadi awal yang baik untuk menjalani
                    kegiatan akademik dan keagamaan di tahun ajaran baru.
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

export default Berita3;
