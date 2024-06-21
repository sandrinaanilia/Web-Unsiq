import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import berita1 from "../assets/img/berita1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const Berita1 = () => {
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
              <h3 className="text-2xl font-bold mt-2">TIM HADROH IPQOSH UNSIQ</h3>
              <div className="text-gray-600 mt-2 flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-teal-600" />
                <span>28 Maret 2024</span>
                <FontAwesomeIcon icon={faClock} className="ml-4 mr-2 text-teal-600" />
                <span>2 bulan lalu</span>
              </div>
            </div>
            <img src={berita1} alt="Berita PPTQ UNSIQ 2" className="w-3/4 h-auto mb-6 rounded-lg shadow-md mx-auto" />
            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-3/4 mx-auto">
              <div className="p-4 lg:p-6">
                <div className="berita text-gray-700">
                  <p>
                    Tim Hadroh IPQOSH (Ikatan Pecinta Qasidah dan Sholawat) dari Universitas Sains Al-Qur’an (UNSIQ) Wonosobo kembali menunjukkan kebolehannya dalam sebuah penampilan yang memukau di acara Malam Seni Islami yang digelar di
                    Aula Kampus UNSIQ. Dengan mengenakan busana seragam berwarna putih bersih dan hijau, para anggota tim tampil penuh percaya diri di hadapan ratusan penonton yang hadir. Penampilan mereka kali ini mengusung tema "Harmoni
                    Religius dalam Sholawat dan Qasidah" yang bertujuan untuk mempererat ukhuwah Islamiyah dan menyebarkan pesan-pesan keagamaan melalui seni hadroh. Dibuka dengan lantunan sholawat "Ya Nabi Salam Alaika", tim hadroh IPQOSH
                    berhasil mencuri perhatian dengan kekompakan dan keharmonisan suara serta alat musik yang mereka mainkan. Suara merdu para vokalis berpadu dengan irama alat musik hadroh, seperti rebana dan marawis, menciptakan suasana
                    yang khusyuk dan menyentuh hati. Penampilan mereka dilanjutkan dengan beberapa qasidah populer seperti "Thola'al Badru" dan "Ya Asyiqol Musthofa", yang membuat penonton turut bershalawat dan bernyanyi bersama. Tidak
                    hanya menyuguhkan hiburan, setiap lirik yang dilantunkan juga sarat akan makna spiritual yang mendalam, mengingatkan para hadirin akan kecintaan dan kerinduan kepada Nabi Muhammad SAW. Salah satu momen puncak dari
                    penampilan malam itu adalah ketika mereka membawakan lagu ciptaan mereka sendiri berjudul "Cahaya Ilahi". Lagu ini mendapatkan sambutan hangat dari penonton karena liriknya yang indah dan musiknya yang menenangkan. Lagu
                    tersebut bercerita tentang pentingnya menjaga hati agar selalu dipenuhi cahaya iman dan ketakwaan kepada Allah SWT.
                  </p>
                  <p className="mt-4">
                    Ketua IPQOSH UNSIQ, Ahmad Fikri, dalam sambutannya menyampaikan rasa syukur dan bangga atas penampilan tim hadroh. "Kami sangat berterima kasih kepada semua pihak yang telah mendukung kegiatan ini. Melalui penampilan
                    ini, kami berharap dapat menyebarkan pesan-pesan kebaikan dan kedamaian, serta mempererat tali silaturahmi di antara kita semua," ujarnya. Penampilan malam itu ditutup dengan doa bersama yang dipimpin oleh Ustadz Hasan
                    Basri, salah satu dosen pengajar di UNSIQ. Doa tersebut mengandung harapan agar seni islami seperti hadroh dapat terus berkembang dan menjadi media dakwah yang efektif di tengah masyarakat. Penampilan Tim Hadroh IPQOSH
                    UNSIQ malam itu tidak hanya sekadar hiburan, tetapi juga menjadi sarana dakwah yang efektif, membawa pesan-pesan moral dan religius yang dapat memperkuat keimanan dan kebersamaan umat. Dengan terus mengadakan acara
                    semacam ini, UNSIQ berharap dapat terus berkontribusi dalam mencetak generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga memiliki akhlak mulia dan kecintaan yang tinggi kepada agama.
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

export default Berita1;
