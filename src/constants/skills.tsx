import { DiFirebase } from "react-icons/di"
import { FaNode, FaReact } from "react-icons/fa6"
import { IoLogoFirebase } from "react-icons/io5"
import { SiC, SiCloudinary, SiCplusplus, SiDocker, SiExpress, SiFirebase, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si"

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
                icon: <SiJavascript className="text-[40px]" />
            }, {
                id: 6,
                title: "TypeScript",
                icon: <SiTypescript className="text-[40px]" />
            }, {
                id: 7,
                title: "C++",
                icon: <SiCplusplus className="text-[40px]" />
            },
            {
                id: 8,
                title: "C",
                icon: <SiC className="text-[40px]" />
            }]
    },
    {
        id: 2,
        category: "Frontend Technologies",
        properties: [{
            id: 1,
            title: "React JS",
            icon: <FaReact className="text-[40px]" />
        },
        {
            id: 5,
            title: "Next JS",
            icon: <SiNextdotjs className="text-[40px]" />
        },
        {
            id: 6,
            title: "Redux Toolkit",
            icon: <SiRedux className="text-[40px]" />
        }, {
            id: 4,
            title: "Tailwind CSS",
            icon: <SiTailwindcss className="text-[40px]" />
        }]
    },

    {
        id: 5,
        category: "Backend Technologies",
        properties: [
            {
                id: 2,
                title: "Node JS",
                icon: <FaNode className="text-[40px]" />
            },
            {
                id: 3,
                title: "Express JS",
                icon: <SiExpress className="text-[40px]" />
            },
        ]
    },
    {
        id: 3,
        category: "Databases",
        properties: [
            {
                id: 4,
                title: "MongoDB",
                icon: <SiMongodb className="text-[40px]" />
            },
            {
                id: 9,
                title: "MySql",
                icon: <SiMysql className="text-[40px]" />
            },
            {
                id: 10,
                title: "PostgreSQL",
                icon: <SiPostgresql className="text-[40px]" />
            }
        ]
    },
    {
        category: "Tools",
        id: 4,
        properties: [
            {
                id: 1,
                title: "Git",
                icon: <SiGit className="text-[40px]" />
            }, {
                id: 2,
                title: "PostMan",
                icon: <SiPostman className="text-[40px]" />
            }, {
                id: 3,
                title: "FireBase",
                icon: <IoLogoFirebase className="text-[40px]" />
            }, {
                id: 4,
                title: "Docker",
                icon: <SiDocker className="text-[40px]" />
            }
        ]
    }
]

