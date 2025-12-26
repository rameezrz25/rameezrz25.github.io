import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Lifestyle from './components/Lifestyle';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/index.css';

function MainPortfolio() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <OpenSource />
      <Lifestyle />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
