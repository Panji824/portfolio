// src/App.js
import React, { useState } from "react";
import Header from "./components/Header"; // JALUR DIPERBAIKI
import Footer from "./components/Footer"; // JALUR DIPERBAIKI
// Import semua halaman
import About from "./pages/About"; // JALUR DIPERBAIKI
import Portfolio from "./pages/Portfolio"; // JALUR DIPERBAIKI
import Resume from "./pages/Resume"; // JALUR DIPERBAIKI
import Contact from "./pages/Contact"; // JALUR DIPERBAIKI
import Certification from "./pages/Certifications"; // JALUR DIPERBAIKI

// Komponen 'placeholder' untuk halaman yang belum dibuat isinya
const DefaultPage = ({ pageName }) => (
  <section className="page-section">
    <h2>{pageName}</h2>
    <p>Konten halaman {pageName} akan segera hadir!</p>
  </section>
);

function App() {
  // 1. Menggunakan state untuk menentukan halaman mana yang aktif
  const [currentPage, setCurrentPage] = useState("About");

  // 2. Fungsi untuk berpindah halaman, diteruskan ke Header
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 3. Fungsi untuk merender komponen halaman yang sesuai
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Resume":
        // Asumsi Anda sudah membuat komponen Resume.js
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Certifications":
        return <Certification />;
      case "Contact":
        return <Contact />;
      default:
        return <DefaultPage pageName="Not Found" />;
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff' }}> 
      
      {/* Header/Sidebar: Beri lebar agar terlihat */}
      <Header 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
        style={{ width: '250px', backgroundColor: '#333', color: 'white', padding: '20px' }} 
      />

      {/* Konten Utama: Beri padding agar tulisan tidak menempel */}
      <main className="content-area" style={{ flexGrow: 1, padding: '40px' }}> 
        {renderPage()}
      </main>
      
      {/* Footer diletakkan di luar flex container atau disesuaikan */}
      {/* Untuk saat ini, kita hilangkan Footer dari tampilan utama agar tidak mengganggu tata letak flex sementara */}
      {/* <Footer /> */} 
    </div>
    );
}

export default App;
