interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Nativo",
        description: "Habla y escrito perfecto",
        show: true
    },
    {
        name: "English",
        level: "B2",
        description: "Fluido",
        show: true
    }
];

export default languages;