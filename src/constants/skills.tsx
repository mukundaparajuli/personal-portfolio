import { FaNode, FaReact } from "react-icons/fa6"
import { SiC, SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si"

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
                icon: <SiJavascript style={{ fontSize: "80" }} />
            }, {
                id: 7,
                title: "C++",
                icon: <SiCplusplus style={{ fontSize: "80" }} />
            },
            {
                id: 8,
                title: "C",
                icon: <SiC style={{ fontSize: "80" }} />
            }]
    },
    {
        id: 2,
        category: "Frameworks and Libraries",
        properties: [{
            id: 1,
            title: "React",
            icon: <FaReact style={{ fontSize: "80" }} />
        },
        {
            id: 2,
            title: "Node JS",
            icon: <FaNode style={{ fontSize: "80" }} />
        },
        {
            id: 3,
            title: "Express JS",
            icon: <SiExpress style={{ fontSize: "80" }} />
        },

        {
            id: 5,
            title: "Next JS",
            icon: <SiNextdotjs style={{ fontSize: "80" }} />
        }]
    },
    {
        id: 3,
        category: "Databases",
        properties: [
            {
                id: 4,
                title: "MongoDB",
                icon: <SiMongodb style={{ fontSize: "80" }} />
            },
            {
                id: 9,
                title: "MySql",
                icon: <SiMysql style={{ fontSize: "80" }} />
            },
        ]
    }
]

