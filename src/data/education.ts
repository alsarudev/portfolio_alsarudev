interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [ 
    {
        title: "Formación Profesional en Desarrollo de Aplicaciones Web",
        startDate: "2013-09-01",
        endDate: "2016-06-30",
        school: "C.F.P Juan XXIII",
        location: "Madrid, España",
        description: "Adquirí una sólida formación en diseño, desarrollo, despliegue e instalación de aplicaciones web, abarcando tanto frontend como backend, CMS, y gestión de infraestructura.",
        currentUni: false
      }
];

export default education;