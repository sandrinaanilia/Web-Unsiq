import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditBerkasData() {
  const navigate = useNavigate();
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [programStudi, setProgramStudi] = useState("");
  const [nim, setNim] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [nik, setNik] = useState("");
  const [kategori, setKategori] = useState("");
  const [nisn, setNisn] = useState("");
  const [namaAyahIbu, setNamaAyahIbu] = useState("");
  const [noTelpOrangTua, setNoTelpOrangTua] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend
    console.log({
      namaLengkap,
      tempatLahir,
      tanggalLahir,
      programStudi,
      nim,
      tahunMasuk,
      nik,
      kategori,
      nisn,
      namaAyahIbu,
      noTelpOrangTua,
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Edit Berkas Data Santri</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="namaLengkap" className="block text-gray-700 font-bold mb-2">
                Nama Lengkap:
              </label>
              <input
                type="text"
                id="namaLengkap"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Sayifullah hadiningrat"
                readOnly
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="programStudi" className="block text-gray-700 font-bold mb-2">
                Program Studi:
              </label>
              <input
                type="text"
                id="programStudi"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={programStudi}
                onChange={(e) => setProgramStudi(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="tempatLahir" className="block text-gray-700 font-bold mb-2">
                Tempat Lahir:
              </label>
              <input
                type="text"
                id="tempatLahir"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={tempatLahir}
                onChange={(e) => setTempatLahir(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="nim" className="block text-gray-700 font-bold mb-2">
                NIM:
              </label>
              <input
                type="text"
                id="nim"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="tanggalLahir" className="block text-gray-700 font-bold mb-2">
                Tanggal Lahir:
              </label>
              <input
                type="text"
                id="tanggalLahir"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="tahunMasuk" className="block text-gray-700 font-bold mb-2">
                Tahun Masuk:
              </label>
              <input
                type="text"
                id="tahunMasuk"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={tahunMasuk}
                onChange={(e) => setTahunMasuk(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="nik" className="block text-gray-700 font-bold mb-2">
                NIK:
              </label>
              <input
                type="text"
                id="nik"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="kategori" className="block text-gray-700 font-bold mb-2">
                Kategori:
              </label>
              <input
                type="text"
                id="kategori"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="nisn" className="block text-gray-700 font-bold mb-2">
                NISN:
              </label>
              <input
                type="text"
                id="nisn"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="namaAyahIbu" className="block text-gray-700 font-bold mb-2">
                Nama Ayah & Ibu:
              </label>
              <input
                type="text"
                id="namaAyahIbu"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={namaAyahIbu}
                onChange={(e) => setNamaAyahIbu(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-4">Berkas - berkas</label>
              <label className="block text-gray-700 font-bold mb-4">Pas foto 3x4</label>
              <div className="flex gap-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Unduh</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="noTelpOrangTua" className="block text-gray-700 font-bold mb-2">
                No. Telp Orang Tua:
              </label>
              <input
                type="text"
                id="noTelpOrangTua"
                className="appearance-none border-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={noTelpOrangTua}
                onChange={(e) => setNoTelpOrangTua(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={() => navigate("/berkasdatasantri")} className="border border-black hover:bg-teal-600 hover:text-white text-teal-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Batal
            </button>

            <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Perbarui
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBerkasData;
