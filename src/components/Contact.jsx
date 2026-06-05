
const Contact = () => {
    return (
        <section id="contact" className="container" style={{ marginTop: '6rem', marginBottom: '4rem' }}>
            <h3>Contacto</h3>
            <p className="contact-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
                ¿Estás buscando un QA Automation con mentalidad analítica y bases firmes en infraestructura? ¡Hablemos!
            </p>

            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <a href="mailto:colmenarez205@gmail.com" className="contact-card">
                    <div className="contact-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                    <h4>Correo</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>colmenarez205@gmail.com</p>
                    <span className="contact-btn" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Enviar Mensaje →</span>
                </a>

                <a href="https://www.linkedin.com/in/miguel-colmenarez-a11780231/" target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💼</div>
                    <h4>LinkedIn</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Conectemos profesionalmente</p>
                    <span className="contact-btn" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Ver Perfil →</span>
                </a>

                <a href="https://github.com/LeandroTmc" target="_blank" rel="noreferrer" className="contact-card">
                    <div className="contact-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
                    <h4>GitHub</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Revisá mis repositorios</p>
                    <span className="contact-btn" style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Ver Código →</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;