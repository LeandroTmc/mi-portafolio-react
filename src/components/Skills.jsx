
const Skills = () => {
    const categorias = [
        {
            titulo: "QA & Automation",
            habilidades: [
                "Java (JUnit / TestNG)",
                "Python (PyTest)",
                "Maven (Gestión de Dependencias)",
                "Lógica de Testing & Casos de Prueba",
                "Estructuras de Control",
                "Reporte de Defectos"
            ]
        }, ,
        {
            titulo: "Infraestructura & Redes",
            habilidades: ["Mantenimiento IT",
                "Conectividad",
                "Configuración de Redes",
                "Soporte Técnico",
                "Hardware"]
        },
        {
            titulo: "Web Development",
            habilidades: ["HTML5 / CSS3",
                "JavaScript (ES6)",
                "React (Vite)",
                "Flexbox / Grid",
                "Git & GitHub"]
        }
    ];

    return (
        <section id="skills" className="container" style={{ marginTop: '4rem' }}>
            <h3>Habilidades Técnicas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                {categorias.map((cat, index) => (
                    <div key={index} className="skill-category">
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>{cat.titulo}</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {cat.habilidades.map((skill, sIndex) => (
                                <li key={sIndex} style={{ marginBottom: '0.6rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-color)' }}>▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;