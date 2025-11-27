import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingContactButton from './components/FloatingContactButton';
import Loading from './components/Loading';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      {isLoading && <Loading />}
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <ScrollProgress />
        <FloatingContactButton />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
