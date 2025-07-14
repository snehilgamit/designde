import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LandingPage from '../components/Landing/LandingPage';
import About from '../components/About/About';
import Donate from '../components/About/Donate';
import EmergencyForm from '../components/About/EmergencyForm';
import Latest from '../components/Blogs/Latest';
import NewsLater from '../components/Blogs/NewsLater';
import Signatories from '../components/About/Signatories';
function App() {
  const barRef = useRef(null);
  const progress = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, [])

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const target = scrollTop / docHeight;

      progress.current += (target - progress.current) * 0.1;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress.current})`;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <body className="__variable_d65c78 __variable_ba9c3a font-p bg-brand-black text-brand-gray-400">
      <div className="fixed top-0 z-10 h-2 w-full">
        <div ref={barRef} className="h-full w-full origin-left bg-brand-red will-change-transform"> </div>
      </div>
      <div className="relative">
        <Header />
        <main className="relative z-[1] -mb-[--rounded-main] rounded-b-[--rounded-main] bg-brand-black pb-48">
          <LandingPage />
          <About />
          <Donate />
          <EmergencyForm />
          <Latest />
          <NewsLater />
          <Signatories />
        </main>
      </div>
      <Footer />
    </body>
  )
}

export default App
