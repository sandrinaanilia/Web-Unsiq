import { useNavigate } from "react-router-dom";
import gambar from "../img/LOGO.png";
import arrow from "../img/arrow.png";
import user from "../img/user3.png";
import lonceng from "../img/lonceng.png";

const Navbar = () => {
  const navigate = useNavigate();
  const loginState = false; // Ubah ini sesuai dengan status login yang sebenarnya

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={gambar} alt="PPTQ UNSIQ 2" />
        <span className="logo-text">PPTQ UNSIQ 2</span>
      </div>
      <ul className="menu">
        <li>
          <button onClick={() => navigate("/")}>Beranda</button>
        </li>
        <li className="w-fit dropdown">
          <div className="flex flex-row gap-2 items-center">
            <button>Profil</button>
            <img src={arrow} className="w-2 h-2 rotate-180" alt="arrow" />
          </div>
          <ul className="dropdown-menu">
            <li>
              <button onClick={() => navigate("/about")}>Tentang Kami</button>
            </li>
            <li>
              <button onClick={() => navigate("/galeri")}>Galeri</button>
            </li>
          </ul>
        </li>
        <li>
          <button onClick={() => navigate("/#c2")}>Berita</button>
        </li>
        <li>
          <button onClick={() => navigate("/pendaftaran")}>Pendaftaran</button>
        </li>
        <li>
          <button onClick={() => navigate("/faq")}>FAQ</button>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
