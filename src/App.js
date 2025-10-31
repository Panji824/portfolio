import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Certification from "./pages/Certifications";
import ScrollVelocity from './pages/ScrollVelocity';

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
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
        return <DefaultPage pageName="Not Found" />;
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
        {renderPage()}
      </main>
    </div>
  );
}

export default App;