import { Skills as SkillsList } from "@/constants/skills"
import { stringify } from "querystring"

export function Skills() {

    return (
        <div className="bg-gray-700 p-6 mt-8 rounded-lg shadow-lg " id="skills">
            <h2 className="text-4xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-1 mb-4 gap-8">{
                SkillsList.map((skill) => (
                    <div key={String(skill.id)} className="flex flex-col gap-4 shadow-xl p-4" >
                        <h3 className="text-xl font-semibold underline">{skill?.category}</h3>
                        <div className="grid grid-cols-5 gap-12 ">
                            {skill?.properties.map((item) => (
                                <div className="cursor-pointer flex flex-col items-center justify-center " key={String(item.id)}>
                                    <div className="item-center">{item.icon}</div>
                                    <div className="text-2xl font-semibold text-center">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }</div>
        </div>
    )
}

