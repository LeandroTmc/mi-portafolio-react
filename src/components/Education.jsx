
const Education = () => {
    const estudios = [
        {
            institucion: "Coursera / University of Minnesota",
            curso: "Automation and Modern Testing Tools",
            periodo: "En Curso",
            descripcion: "Especialización práctica en herramientas y frameworks modernos de automatización. Foco en el ciclo de vida de pruebas automatizadas con Java, diseño de scripts eficientes, gestión de dependencias con Maven y estructuración avanzada de suites de prueba mediante anotaciones con TestNG y JUnit.",
            actual: true
        }, ,
        {
            institucion: "Talento Tech (La Plata)",
            curso: "Desarrollo Python & Lógica de Datos",
            periodo: "En Curso",
            descripcion: "Formación intensiva enfocada en lógica de programación avanzada, estructuras de control, funciones y manipulación de datos. Orientado al desarrollo de scripts robustos para la automatización de procesos y pruebas de software.",
            actual: true
        },
        {
            institucion: "Coursera / University of Minnesota",
            curso: "Introduction to Software Quality Assurance",
            periodo: "Certificado Obtenido",
            descripcion: "Fundamentos sólidos de QA: metodologías de testing (Caja Negra y Caja Blanca), niveles de prueba (unitarias, integración, sistema), gestión de defectos, métricas de calidad y procesos formales de verificación y validación de software.",
            actual: false
        },
        {
            institucion: "Alura Latam",
            curso: "Formación en Desarrollo Front-End",
            periodo: "Trayectoria Completa",
            descripcion: "Especialización en tecnologías web esenciales: HTML5 semántico, CSS3 avanzado (Layouts, Flexbox, Grid), JavaScript nativo (ES6+, manipulación del DOM y asincronismo) y arquitectura de componentes dinámicos con React.",
            actual: false
        }
    ];

    return (
        <section id="education" className="container" style={{ marginTop: '4rem' }}>
            <h3>Formación y Certificaciones</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
                {estudios.map((estudio, index) => (
                    <div
                        key={index}
                        className="skill-category"
                        style={{
                            borderLeft: estudio.actual ? '4px solid var(--accent-color)' : '1px solid #334155',
                            position: 'relative'
                        }}
                    >
                        {estudio.actual && (
                            <span style={{
                                position: 'absolute',
                                top: '1.2rem',
                                right: '2rem',
                                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                color: 'var(--accent-color)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>
                                Cursando
                            </span>
                        )}
                        <h4 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{estudio.curso}</h4>
                        <h5 style={{ color: 'var(--text-muted)', fontWeight: '500', marginBottom: '0.8rem' }}>
                            {estudio.institucion} — <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>{estudio.periodo}</span>
                        </h5>
                        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1rem', lineHeight: '1.5' }}>{estudio.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;