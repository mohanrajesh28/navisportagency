import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactCTA from './components/ContactCTA';
import Home from './pages/Home';
import Work from './pages/Work.tsx';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <main className="relative selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isContactPage && <ContactCTA />}
      <Footer />
    </main>
  );
}
