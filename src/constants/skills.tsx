import { FaNode, FaReact } from "react-icons/fa6"
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si"

interface Skill {
    id: Number,
    title: String,
    icon: React.ReactElement
}

export const Skills: Skill[] = [
    {
        id: 1,
        title: "React",
        icon: <FaReact style={{ fontSize: "120" }} />
    },
    {
        id: 2,
        title: "Node JS",
        icon: <FaNode style={{ fontSize: "120" }} />
    },
    {
        id: 3,
        title: "Express JS",
        icon: <SiExpress style={{ fontSize: "120" }} />
    },
    {
        id: 4,
        title: "MongoDB",
        icon: <SiMongodb style={{ fontSize: "120" }} />
    },
    {
        id: 5,
        title: "Next JS",
        icon: <SiNextdotjs style={{ fontSize: "120" }} />
    },
]

