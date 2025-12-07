import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import GetInTouch from './pages/GetInTouch.jsx';
import AnimatedBackground from './components/AnimatedBackground';
import AutoPlayAudio from './components/AutoPlayAudio.jsx';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest('.glow-outline');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--x', x + 'px');
      el.style.setProperty('--y', y + 'px');
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatedBackground />
      <AutoPlayAudio volume={0.08} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<GetInTouch />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
