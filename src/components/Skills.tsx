import { Skills as SkillsList } from "@/constants/skills"

export function Skills() {

    return (
        <div className="bg-gray-700 p-6 mt-8 rounded-lg shadow-lg  ">
            <h2>Skills</h2>
            <div className="flex items-center justify-between">{
                SkillsList.map((skill) => (
                    <div >
                        <div>{skill.icon}</div>
                        <div className="text-2xl font-semibold text-center">{skill.title}</div>
                    </div>
                ))
            }</div>
        </div>
    )
}