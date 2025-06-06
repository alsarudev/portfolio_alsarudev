interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Framework para crear sitios web estaticos y modernos.",
    icon: "astro_dark"
  },
  {
    name: "NextJs",
    description: "Mi framework de React favorito para crear aplicaciones web modernas",
    icon: "nextjs_icon_dark"
  },
  {
    name: "Java",
    description: "Lenguaje Backend con experiencia en diferentes aplicaciones web",
    icon: "javaicon"
  },
  {
    name: "GitHub",
    description: "Experto en manejo de control de versiones con el cliente de GitHub",
    icon: "github"
  }
];

export default hardSkills;