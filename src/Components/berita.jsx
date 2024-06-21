import "./App.css"; // Gantilah dengan path yang sesuai dengan file CSS Anda

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="asset/img/logo ponpesma.png" alt="PPTQ UNSIQ 2" />
        <span className="logo-text">PPTQ UNSIQ 2</span>
      </div>
      <ul className="menu">
        <li>
          <a href="#">Beranda</a>
        </li>
        <li className="dropdown">
          <a href="#">Profil</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Galeri</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Berita</a>
        </li>
        <li>
          <a href="#">Pendaftaran</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
      </ul>
      <div className="login">
        <a href="#" className="login-btn">
          Masuk
        </a>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Berita Terbaru</h1>
    </header>
  );
}

function Article() {
  return (
    <section className="news">
      <div className="container">
        <article>
          <h5>Informasi</h5>
          <h3>PPTQ UNSIQ 2 BERHASIL MEMBAWA 2 PIALA DALAM RANGKA HARI SANTRI</h3>
          <p className="date">22 Oktober 2023 | 1 bulan lalu</p>
          <img src="asset/img/foto berita.jpg" alt="Berita PPTQ UNSIQ 2" />
          <div className="berita">
            <p> {/* tambahkan konten artikel di sini */}</p>
            <p> {/* tambahkan konten artikel di sini */}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-icon">
          <a href="https://www.instagram.com" target="_blank">
            <img src="asset/img/ig.jpg" alt="Instagram" />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://www.youtube.com" target="_blank">
            <img src="asset/img/yt.png" alt="YouTube" />
          </a>
        </div>
        <div className="footer-icon">
          <a href="mailto:example@example.com">
            <img src="asset/img/email.jpeg" alt="Email" />
          </a>
        </div>
      </div>
      <div className="right-section">
        <p>&#169; 2024 Pondok Pesantren UNSIQ II. All right reserved</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
