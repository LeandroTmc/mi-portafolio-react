
const Projects = () => {
    const proyectos = [
        {
            titulo: "Automation Framework Structure",
            descripcion: "Desarrollo de lógica centralizada con Python para la automatización de flujos. Implementación de estructuras de control avanzadas y manejo de datos para asegurar la escalabilidad de las pruebas.",
            tags: ["Python", "Logic", "QA Automation"],
            link: "https://github.com/LeandroTmc/Talento-tech" // Asegurate de que sea el link correcto
        }
    ];

    return (
        <section id="projects" className="container" style={{ marginTop: '4rem' }}>
            <h3>Proyectos Destacados</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
                {proyectos.map((proy, index) => (
                    <div key={index} className="skill-category" style={{ padding: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{proy.titulo}</h4>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{proy.descripcion}</p>
                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem' }}>
                            {proy.tags.map((tag, tIndex) => (
                                <span key={tIndex} style={{ border: '1px solid var(--accent-color)', color: 'var(--accent-color)', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={proy.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '1px solid var(--accent-color)' }}>
                            Ver Código en GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;