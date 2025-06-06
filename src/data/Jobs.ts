/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
        {
          title: "Desarrollador Full Stack | Soluciones Digitales en Banco Santander",
          startDate: "2020-05-01",
          company: "VASS",
          location: "Madrid",
          description: "Diseño y desarrollo de soluciones digitales innovadoras en entornos empresariales de alto rendimiento para el sector bancario, con un enfoque en escalabilidad, seguridad y calidad en un entorno altamente regulado.",
          goals: [
            "Especialización en arquitecturas Headless utilizando Bloomreach CMS (Java) como backend y Next.js 15 como framework frontend.",
            "Diseño e implementación de APIs REST seguras con autenticación JWT para protección de datos sensibles.",
            "Desarrollo de interfaces fluidas basadas en diseños de Figma para mejorar la experiencia de usuario.",
            "Gestión de control de versiones con GitHub, integración continua y despliegues automatizados con GitHub Actions.",
            "Contribución al éxito de proyectos críticos cumpliendo altos estándares de calidad, seguridad y escalabilidad."
          ],
          currentJob: true
        },
        {
          title: "Desarrollador Java | Soluciones Digitales para ICEX",
          startDate: "2018-01-01",
          endDate: "2020-05-01",
          company: "VASS",
          location: "Madrid",
          description: "Responsable del mantenimiento y evolución de los portales institucionales del ICEX, utilizando Oracle UCM y Oracle WebLogic en una arquitectura empresarial compleja.",
          goals: [
            "Integración de componentes personalizados y gestión de contenidos dinámicos con Oracle Universal Content Management 11g.",
            "Resolución eficiente de incidencias técnicas para asegurar estabilidad y alto rendimiento del sistema.",
            "Trabajo en entornos de desarrollo con JDeveloper mejorando la funcionalidad de las plataformas institucionales.",
            "Mejora continua de plataformas digitales del ICEX enfocada en fiabilidad y rendimiento.",
            "Apoyo a los objetivos institucionales del ICEX mediante la entrega de sistemas digitales estables y eficientes."
          ],
          currentJob: false
        },
        {
            title: "Desarrollador Java | Soluciones Web para el Ministerio de Justicia",
            startDate: "2017-09-01",
            endDate: "2018-01-01",
            company: "TECASERG SERVICIOS, S.L.",
            location: "Madrid",
            description: "Desarrollador en entorno FatWire 7 (antecesor de Oracle WebCenter Sites), responsable de mantener y evolucionar funcionalidades web mediante plantillas JSP y ajustes de estilos CSS.",
            goals: [
              "Mantenimiento y evolución de funcionalidades web institucionales en FatWire 7.",
              "Creación y modificación de plantillas JSP para adaptar el contenido según las directrices corporativas.",
              "Ajustes de estilos CSS para cumplir con los requisitos visuales y funcionales.",
              "Integración efectiva de los requerimientos funcionales y estéticos en plataformas institucionales.",
              "Asegurar la consistencia visual y técnica en los portales del Ministerio de Justicia."
            ],
            currentJob: false
          },
          {
            title: "Desarrollador Java | Soluciones Web Corporativas y Proyectos de Migración para Correos",
            startDate: "2016-11-01",
            endDate: "2017-09-01",
            company: "TECASERG SERVICIOS, S.L.",
            location: "Madrid",
            description: "Proyecto para Correos enfocado en el desarrollo y migración de soluciones web corporativas utilizando tecnologías Java.",
            goals: [
              "Participación en proyectos de migración de plataformas web corporativas para la Sociedad Estatal Correos y Telégrafos.",
              "Desarrollo de soluciones Java adaptadas a las necesidades de la empresa pública.",
              "Colaboración con el equipo técnico para integrar nuevas funcionalidades en los sistemas existentes.",
              "Asegurar la continuidad del servicio durante procesos de migración tecnológica.",
              "Adaptación a entornos regulados con necesidades específicas en seguridad y disponibilidad."
            ],
            currentJob: false
          },
];
export default workExperience;