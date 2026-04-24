import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotices from './pages/LegalNotices';

function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Team />
      <Partners />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<LegalNotices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
