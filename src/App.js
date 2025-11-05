// src/App.js
import React, { useState, useEffect } from "react";
// Import Router Hooks dan Components yang diperlukan
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Import Pages
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Certification from "./pages/Certifications";
import ScrollVelocity from './pages/ScrollVelocity';
// Pastikan Articles diekspor bersamaan dengan ArticlesPage
import ArticlesPage, { Articles } from "./pages/Articles"; 
import ArticleDetail from './pages/ArticleDetail'; 


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
  
  const location = useLocation(); 
  const navigate = useNavigate(); 

  // Logika Intro (Splash Screen)
  useEffect(() => {
    const timerIntro = setTimeout(() => {
      setIntroOpacity(0);
      
      const timerFade = setTimeout(() => {
        setIsIntroVisible(false);
      }, FADE_DURATION);

      return () => clearTimeout(timerFade);

    }, INTRO_DURATION);

    return () => clearTimeout(timerIntro);
  }, []);

  // Handler Navigasi (Hybrid Logic)
  const handlePageChange = (page) => {
    if (page === 'Articles') {
        navigate('/articles'); // Gunakan Router untuk Articles
        setCurrentPage(page);
    } else {
        // Navigasi Statis (About, Resume, Portfolio, dll.)
        navigate('/'); // Pindah ke root untuk semua halaman statis
        setCurrentPage(page); // Ubah state untuk renderPage
    }
    window.scrollTo(0, 0); 
  };

  const renderContent = () => {
    // 1. Cek apakah path saat ini adalah path blog yang ditangani oleh Router
    // Kita juga harus memeriksa rute root ("/") untuk menghindari tumpang tindih
    if (location.pathname.startsWith('/articles')) {
      return (
        <Routes>
          <Route path="/articles" element={<ArticlesPage />} />
          {/* Rute Dinamis: Pastikan articles={Articles} diteruskan */}
          <Route path="/articles/:articleSlug" element={<ArticleDetail articles={Articles} />} />
          <Route path="*" element={<DefaultPage pageName="Blog Not Found" />} />
        </Routes>
      );
    }
    
    // 2. Jika bukan rute Articles, gunakan sistem State-Based (renderPage)
    // Catatan: Jika Anda ingin About, Resume, dll. memiliki URL unik, 
    // Anda harus mengubah ini kembali ke sistem Router murni.
    
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
        // Render About jika state tidak valid (misalnya, saat pertama kali memuat)
        return <About />; 
    }
  };

  if (isIntroVisible) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#556B2F',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          opacity: introOpacity,
          transition: `opacity ${FADE_DURATION}ms ease-out`,
        }}
      >
        {/* ScrollVelocity sebagai Opening */}
        <ScrollVelocity 
          texts={[ 'TestNG','Jira','Selenium','Postman','Git']} 
          velocity={50}
          className="custom-scroll-text"
        />
      </div>
    );
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
      {/* Footer di sini jika itu footer global */}
    </div>
  );
}

export default App;