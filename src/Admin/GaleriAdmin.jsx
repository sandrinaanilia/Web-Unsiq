import React, { useState } from "react";
import arrow from "../img/arrow.png";
import Sidebar from "../Components/sidebar";
import Profil from "../img/hamam.png";
import searchIcon from "../img/search.png";
import Berita1 from "../img/berita1.jpg";
import Berita2 from "../img/berita2.jpg";

const Galeri = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); // State for logout popup
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false); // State for change password popup
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalMode, setGalleryModalMode] = useState("Tambah"); // Tambah or Edit
  const [selectedImage, setSelectedImage] = useState(null);
  const [gallery, setGallery] = useState([
    { id: 1, text: "2 hari lalu", img: Berita1 },
    { id: 2, text: "7 hari lalu", img: Berita2 },
  ]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const openSettingsPopup = () => {
    setIsSettingsPopupOpen(true);
  };

  const closeSettingsPopup = () => {
    setIsSettingsPopupOpen(false);
  };

  const openLogoutPopup = () => {
    setIsLogoutPopupOpen(true);
  };

  const closeLogoutPopup = () => {
    setIsLogoutPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Lakukan validasi kata sandi baru
    if (newPassword !== confirmPassword) {
      setPasswordError("Kata sandi baru tidak cocok");
      return;
    }

    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsChangePasswordOpen(false);
  };

  const openGalleryModal = (mode, image) => {
    setGalleryModalMode(mode);
    setSelectedImage(image || null);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setSelectedImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySubmit = () => {
    if (galleryModalMode === "Tambah") {
      const newGalleryItem = {
        id: gallery.length + 1,
        text: "Hari ini",
        img: selectedImage,
      };
      setGallery([...gallery, newGalleryItem]);
    } else if (galleryModalMode === "Edit" && selectedImage) {
      setGallery(gallery.map((item) => (item.id === selectedImage.id ? { ...item, img: selectedImage.img } : item)));
    }
    closeGalleryModal();
  };

  const openDeleteModal = (image) => {
    setImageToDelete(image);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setImageToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteImage = () => {
    setGallery(gallery.filter((item) => item.id !== imageToDelete.id));
    closeDeleteModal();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white shadow-lg p-4">
          <div className="relative">
            <button className="absolute left-2 top-2">
              <img src={searchIcon} alt="Search" className="w-6 h-6" />
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 pl-10 p-2 rounded-lg focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
              <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
              <span className="text-black">Abdurohman Hamam</span>
              <img src={arrow} alt="Dropdown Arrow" className={`w-2 h-2 ml-2 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`} />
            </div>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openPopup}>
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openSettingsPopup}>
                  Pengaturan
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={openLogoutPopup}>
                  Keluar
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Popup for Profile */}
        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Profil</h2>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                  <span className="text-black font-bold">Admin</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namaLengkap">Nama Lengkap:</label>
                  <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="abdurohman@gmail.com" value="Abdurohman@gmail.com" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="noTelp">Nomor Telepon:</label>
                  <input type="tel" id="noTelp" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="08977654323" value="08977654323" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="jabatan">Jabatan:</label>
                  <input type="text" id="jabatan" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Sekretaris 2" value="Sekretaris 2" readOnly />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="kataSandi">Kata Sandi:</label>
                  <input type="password" id="kataSandi" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="*********" value="Abd*******98" readOnly />
                </div>
                <div className="flex justify-end">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closePopup}>
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Popup for Settings */}
        {isSettingsPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Pengaturan</h2>
              <div className="flex flex-col gap-2">
                <form className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src={Profil} alt="Profile" className="w-12 h-12 rounded-full" />
                    <span className="text-black font-bold">Admin</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="namaLengkap">Nama Lengkap:</label>
                    <input type="text" id="namaLengkap" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Abdurohman Hamam" value="Abdurohman Hamam" readOnly />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={toggleChangePassword}>
                      Ubah Kata Sandi
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Kembali</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Popup for Logout */}
        {isLogoutPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Keluar dari akun anda?</h2>
              <div className="flex justify-end gap-4">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeLogoutPopup}>
                  Tidak
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    // Add your logout logic here
                    console.log("Logout!");
                    closeLogoutPopup();
                  }}
                >
                  Keluar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Galeri</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="relative group">
                <img src={item.img} alt={`Gambar ${item.id}`} className="w-full h-48 object-cover rounded-md" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-md">{item.text}</div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button className="bg-white text-black px-2 py-1 rounded-md mr-2" onClick={() => openGalleryModal("Edit", item)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => openDeleteModal(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={() => openGalleryModal("Tambah")}>
              Tambah Gambar
            </button>
          </div>
        </div>

        {/* Gallery Modal */}
        {isGalleryModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">{galleryModalMode === "Tambah" ? "Tambah Gambar" : "Edit Gambar"}</h2>
              <form className="flex flex-col gap-4" onSubmit={handleGallerySubmit}>
                {/* Input untuk memilih file baru */}
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {/* Menampilkan gambar yang dipilih */}
                {selectedImage && <img src={selectedImage} alt="Selected" className="w-full h-48 object-cover rounded-md" />}
                <div className="flex justify-end gap-4">
                  <button type="button" className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeGalleryModal}>
                    Batal
                  </button>
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    Perbarui
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Hapus Gambar</h2>
              <p>Apakah Anda yakin ingin menghapus foto ini?</p>
              <div className="flex justify-end gap-4 mt-4">
                <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={closeDeleteModal}>
                  Batal
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={handleDeleteImage}>
                  Yakin
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeri;
