import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcome1 from "../assets/img/welcome1.jpeg";

const Login = () => {
  const [role, setRole] = useState("Mahasiswa");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Tambahkan state untuk pesan error atau sukses
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logika untuk autentikasi pengguna
    try {
      // Contoh validasi sederhana
      if (email === "admin@example.com" && password === "password" && role === "Admin") {
        navigate("/admin-dashboard");
      } else if (email === "student@example.com" && password === "password" && role === "Mahasiswa") {
        navigate("/student-dashboard");
      } else {
        setMessage("Email atau kata sandi salah.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-10 max-w-4xl w-full">
        {/* Left side: Login form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-teal-600 mb-6">Masuk ke akun Anda</h1>

          {/* Toggle buttons */}
          <div className="flex mb-6 rounded-md hover:bg-teal-700 transition duration-300">
            <button className={`flex-1 py-2 rounded-l-lg focus:outline-none ${role === "Mahasiswa" ? "bg-teal-600 text-white font-bold" : "bg-emerald-50 text-emerald-600 font-bold"}`} onClick={() => setRole("Mahasiswa")}>
              Mahasiswa
            </button>
            <button className={`flex-1 py-2 rounded-r-lg focus:outline-none ${role === "Admin" ? "bg-teal-600 text-white font-bold" : "bg-emerald-50 text-emerald-600 font-bold"}`} onClick={() => setRole("Admin")}>
              Admin
            </button>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-teal-600 hover:underline">
                Lupa kata sandi?
              </a>
            </div>
            <button type="submit" className="w-full bg-teal-600 text-white py-3 px-10 rounded-md hover:bg-teal-700 transition duration-300">
              Masuk
            </button>
          </form>

          {message && (
            <div className="mt-4 text-center text-red-500">
              <p>{message}</p>
            </div>
          )}

          {/* Register button */}
          <div className="mt-4 text-center">
            <p>
              Belum punya akun?{" "}
              <button onClick={handleRegisterClick} className="text-teal-600 hover:underline focus:outline-none">
                Daftar Disini
              </button>
            </p>
          </div>
        </div>

        {/* Right side: Welcome message */}
        <div className="hidden md:flex md:w-1/2 text-white flex-col justify-center items-center p-6">
          <div className="text-center">
            <img src={welcome1} alt="Logo" className="mb-4 w-240 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
