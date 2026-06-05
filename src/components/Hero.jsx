
const Hero = () => {
    return (
        <section id="hero" className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
            <div className="hero-layout" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', width: '100%' }}>
                <div className="hero-content">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Hola, soy Leandro</h1>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: '500' }}>
                        QA Automation & IT Infrastructure
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
                        Especializado en asegurar la calidad del software mediante automatización robusta, con un fuerte background en redes, conectividad e infraestructura informática.
                    </p>
                    <a href="#projects" className="btn" style={{ display: 'inline-block', backgroundColor: 'var(--accent-color)', color: '#000', padding: '0.8rem 2rem', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
                        Ver Proyectos
                    </a>
                </div>
                <div className="hero-image-container" style={{ flex: 1, display: 'flex', justifycontent: 'center' }}>
                    <img
                        src="/mi-foto.png"
                        alt="Foto de Leandro"
                        className="hero-profile-img"
                        style={{ width: '280px', height: '280px', objectFit: 'cover', borderRadius: '50%', border: '3px solid var(--accent-color)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;