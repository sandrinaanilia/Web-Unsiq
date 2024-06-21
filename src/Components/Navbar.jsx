import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../store/auth.js";
import gambar from "../assets/img/LOGO.png";
import arrow from "../assets/img/arrow.png";
import user from "../assets/img/user3.png";
import lonceng from "../assets/img/lonceng.png";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(isLogin);

  useEffect(() => {
    setLoginState(isLogin);
  }, [isLogin]);

  const handleLogin = () => {
    dispatch(SignIn());
  };

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
            <img src={arrow} className="w-2 h-2 rotate-180" />
          </div>
          <span className="material-icon dropdown-icon"></span>
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
      <div className={loginState ? "profil-btn" : "login-btn"}>
        <div className="flex justify-end flex-row items-center gap-4">
          {loginState ? (
            <>
              <div className="flex items-center cursor-pointer" onClick={() => navigate("/lonceng")}>
                <img src={lonceng} alt="Notifications" className="w-8 h-8" />
              </div>
              <div className="flex items-center cursor-pointer" onClick={() => navigate("/formulirpendaftaran")}>
                <img src={user} alt="Profile" className="w-8 h-8 rounded-full" />
              </div>
            </>
          ) : (
            <button onClick={() => navigate("/login")}>Masuk</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
