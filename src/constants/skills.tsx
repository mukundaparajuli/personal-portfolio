import { FaNode, FaReact } from "react-icons/fa6"
import { SiC, SiCplusplus, SiExpress, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si"

interface props {
    id: Number,
    title: String,
    icon: React.ReactElement
}
interface Skill {
    id: Number
    category: string,
    properties: props[]
}

export const Skills: Skill[] = [

    {
        id: 1,
        category: "Programming Languages",
        properties: [
            {
                id: 6,
                title: "JavaScript",
                icon: <SiJavascript style={{ fontSize: "60" }} />
            }, {
                id: 6,
                title: "TypeScript",
                icon: <SiTypescript style={{ fontSize: "60" }} />
            }, {
                id: 7,
                title: "C++",
                icon: <SiCplusplus style={{ fontSize: "60" }} />
            },
            {
                id: 8,
                title: "C",
                icon: <SiC style={{ fontSize: "60" }} />
            }]
    },
    {
        id: 2,
        category: "Frameworks and Libraries",
        properties: [{
            id: 1,
            title: "React JS",
            icon: <FaReact style={{ fontSize: "60" }} />
        },
        {
            id: 2,
            title: "Node JS",
            icon: <FaNode style={{ fontSize: "60" }} />
        },
        {
            id: 3,
            title: "Express JS",
            icon: <SiExpress style={{ fontSize: "60" }} />
        },
        {
            id: 4,
            title: "Tailwind CSS",
            icon: <SiTailwindcss style={{ fontSize: "60" }} />
        },

        {
            id: 5,
            title: "Next JS",
            icon: <SiNextdotjs style={{ fontSize: "60" }} />
        }]
    },
    {
        id: 3,
        category: "Databases",
        properties: [
            {
                id: 4,
                title: "MongoDB",
                icon: <SiMongodb style={{ fontSize: "60" }} />
            },
            {
                id: 9,
                title: "MySql",
                icon: <SiMysql style={{ fontSize: "60" }} />
            },
        ]
    }, {
        category: "Tools",
        id: 4,
        properties: [
            {
                id: 1,
                title: "Git",
                icon: <SiGit style={{ fontSize: "60" }} />
            }, {
                id: 2,
                title: "PostMan",
                icon: <SiPostman style={{ fontSize: "60" }} />
            }
        ]
    }
]

