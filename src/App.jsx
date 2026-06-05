import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Projects from './components/Projects'; // Importado
import Skills from './components/Skills'; // Importado

function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: '#f8fafc' }}>
      <header style={{ position: 'fixed', width: '100%', top: 0, zIndex: 100, borderBottom: '1px solid #334155', backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ padding: '1rem 0' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Leandro<span style={{ color: 'var(--accent-color)' }}>.qa</span></h1>
        </div>
      </header>

      <main style={{ paddingTop: '4rem' }}>
        <Hero />
        <Skills />      {/* Aparece abajo del Hero */}
        <Education />
        <Projects />    {/* Aparece abajo de Educación */}
        <Contact />
      </main>

      <footer style={{ borderTop: '1px solid #334155', backgroundColor: '#0b0f19', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)' }}>© 2026 Leandro - QA Automation & Infrastructure</p>
        </div>
      </footer>
    </div>
  );
}

export default App;