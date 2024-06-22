import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import berita2 from "../img/berita2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const Berita2 = () => {
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
              <h3 className="text-2xl font-bold mt-2">INFORMASI DAFTAR ULANG PARA MAHASISWA SANTRI UNSIQ 2</h3>
              <div className="text-gray-600 mt-2 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-teal-600" />
                <span>20 April 2024</span>
                <FontAwesomeIcon icon={faClock} className="ml-4 mr-2 text-teal-600" />
                <span>1 bulan lalu</span>
              </div>
            </div>
            <img src={berita2} alt="Berita PPTQ UNSIQ 2" className="w-3/4 h-auto mb-6 rounded-lg shadow-md mx-auto" />
            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/4 mx-auto">
              <div className="p-4 lg:p-6">
                <div className="berita text-gray-700">
                  <p>
                    Pondok Pesantren Mahasiswa UNSIQ 2 telah resmi membuka pendaftaran ulang bagi para santri lama dan baru untuk tahun ajaran 2024/2025. Proses daftar ulang ini bertujuan untuk memastikan bahwa seluruh santri dapat
                    mengikuti kegiatan belajar mengajar serta program keagamaan dengan baik. Pendaftaran ulang dimulai pada tanggal 1 Juli dan akan berakhir pada 31 Juli 2024. Seluruh santri diwajibkan untuk membawa dokumen-dokumen penting
                    seperti kartu tanda santri, fotokopi KTP, serta bukti pembayaran SPP bulan terakhir. Selain itu, bagi santri baru, diperlukan juga membawa surat keterangan sehat dari dokter dan pas foto ukuran 3x4 sebanyak 4 lembar.
                    Pihak pondok pesantren juga mengingatkan bahwa semua santri harus memenuhi kewajiban administrasi serta mengikuti tes kesehatan yang diselenggarakan di lingkungan pondok. Pembayaran daftar ulang dapat dilakukan secara
                    langsung di kantor administrasi pondok pesantren atau melalui transfer bank yang telah ditentukan. Untuk memudahkan proses, pondok pesantren telah menyediakan layanan bantuan informasi melalui nomor telepon dan email
                    resmi pondok.
                  </p>
                  <p className="mt-4">
                    Sebagai bagian dari upaya peningkatan kualitas pendidikan dan pengasuhan, Pondok Pesantren Mahasiswa UNSIQ 2 juga akan mengadakan orientasi bagi santri baru yang bertujuan untuk memperkenalkan lingkungan pondok,
                    peraturan, serta tata cara kehidupan sehari-hari di pondok pesantren. Orientasi ini dijadwalkan pada awal Agustus 2024, sebelum dimulainya kegiatan belajar mengajar. Semua santri diharapkan dapat mengikuti seluruh
                    rangkaian kegiatan ini dengan baik untuk menciptakan lingkungan belajar yang kondusif dan harmonis.Dengan dimulainya pendaftaran ulang ini, Pondok Pesantren Mahasiswa UNSIQ 2 berharap dapat terus memberikan pendidikan
                    agama yang berkualitas dan mendukung perkembangan intelektual serta spiritual para santri. Bagi para orang tua dan wali santri, informasi lebih lanjut mengenai pendaftaran ulang dapat diakses melalui situs resmi pondok
                    pesantren atau langsung menghubungi pihak administrasi.
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

export default Berita2;
