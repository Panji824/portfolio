// src/App.js
import React, { useState, useEffect } from "react";
// Import Router Components
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Import Pages
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Certification from "./pages/Certifications";
import ScrollVelocity from './pages/ScrollVelocity';
import ArticlesPage, { Articles } from "./pages/Articles"; // <-- PENTING: Import Articles data dari sini
import ArticleDetail from './pages/ArticleDetail'; // <-- Komponen Detail

// --- Komponen & Konstanta ---
const DefaultPage = ({ pageName }) => (
  <section className="page-section">
    <h2>{pageName}</h2>
    <p>Konten halaman {pageName} akan segera hadir!</p>
  </section>
);

const INTRO_DURATION = 3000;
const FADE_DURATION = 1000;

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [introOpacity, setIntroOpacity] = useState(1);
  
  const location = useLocation(); // Hook Router
  const navigate = useNavigate(); // Hook Router

  // Logika Intro
  useEffect(() => {
    // ... (Logika Intro Anda) ...
  }, []);

  // Handler Navigasi (Memicu State ATAU Router)
  const handlePageChange = (page) => {
    // Jika halaman adalah Articles, gunakan Router untuk navigasi
    if (page === 'Articles') {
        navigate('/articles'); // Pindah ke URL /articles
        setCurrentPage(page);
    } else {
        // Halaman lain tetap menggunakan State (hanya mengubah konten)
        setCurrentPage(page);
        // Penting: Pindah ke root path / untuk menjaga tampilan bersih
        navigate('/'); 
    }
    window.scrollTo(0, 0); 
  };

  const renderContent = () => {
    // 1. Cek apakah path saat ini adalah path blog yang ditangani oleh Router
    if (location.pathname.startsWith('/articles')) {
      // Jika di path /articles atau /articles/:slug, serahkan ke Routes
      return (
        <Routes>
          {/* Rute Statis untuk Daftar Artikel */}
          <Route path="/articles" element={<ArticlesPage />} />
          {/* Rute Dinamis untuk Artikel Tunggal (meneruskan data) */}
          <Route path="/articles/:articleSlug" element={<ArticleDetail articles={Articles} />} />
          {/* Catch-all jika ada error di path /articles/* */}
          <Route path="*" element={<DefaultPage pageName="Blog Not Found" />} />
        </Routes>
      );
    }
    
    // 2. Jika tidak di path blog, gunakan sistem State-Based (renderPage)
    switch (currentPage) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Certifications":
        return <Certification />;
      case "Contact":
        return <Contact />;
      default:
        // Jika URL berubah ke sesuatu yang tidak ditangani oleh state (misal /resume), 
        return <DefaultPage pageName="Not Found" />;
    }
  };

  if (isIntroVisible) {
    // ... (return Intro) ...
  }

  return (
    <div className="app-container"> 
      <Header 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      />
      <main className="content-area"> 
        {renderContent()}
      </main>
    </div>
  );
}

export default App;