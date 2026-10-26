import type { Project } from "@/types/project";
import geanlaern from "@/assets/images/genlearn.png";
import learnova from "@/assets/images/learnova.png";
import famory from "@/assets/images/famory.png";
export const projects: Project[] = [
    {
        id: "p1",
        title: "GENLEARN",
        description: "Short one/two line description of what it does and the impact it had.",
        image: geanlaern,
        tags: [ "React", "TypeScript", "Tailwind", "Tailwind", "TankQuery", "LENIS", "AZURE", "AI", " PostgreSQL" ],
        link: "https://gen-learn-front-end.vercel.app/",
        github: "https://github.com/Gen-Learn/Documentation"
    },
    {
        id: "p2",
        title: "Famory",
        description: "Short one/two line description of what it does and the impact it had.",
        image: famory,
        tags: [ "React", "JAVAScript", "Tailwind", "react-router" ],
        link: "famory.vercel.app",
    },
    {
        id: "p3",
        title: "Learnova",
        description: "Short one/two line description of what it does and the impact it had.",
        image: learnova,
        tags: [ "Node.js", "MongoDB", "REACT", "Tailwind", "JAVAScript", "Redux", "GSAP", "LENIS" ],
        link: "https://learnova-yhcq.vercel.app/",
    }
];