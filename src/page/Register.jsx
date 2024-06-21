import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/welcome2.jpeg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", { name, email, password });
      localStorage.setItem("token", response.data.token);
      setMessage("User registered successfully!, mengalihkan ke DashboardUser");
      navigate("/formulirpendaftaran");

      //console.log(response.data);
    } catch (error) {
      setMessage("Register failed! Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-10 max-w-4xl w-full">
        {/* Left side */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
          <img src={Logo} alt="Logo" className="w-240 mb-4 mx-auto hidden md:block" />
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-teal-600 mb-2">Buat Akun</h2>
            <p className="text-gray-400 mb-8">gunakan email Anda untuk pendaftaran</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">
                  Nama Lengkap
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
              </div>
              <div>
                <label className="block text-gray-700">
                  Email
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
              </div>
              <div>
                <label className="block text-gray-700">
                  Kata Sandi
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                    placeholder="Kata Sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-4 text-right">
                <a href="#" className="text-teal-600 hover:underline">
                  Lupa kata sandi?
                </a>
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300">
                Daftar
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Sudah punya akun?{" "}
              <a href="/login" className="text-teal-600 hover:underline">
                Masuk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
