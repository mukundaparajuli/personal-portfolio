import { Skills as SkillsList } from "@/constants/skills"
import { stringify } from "querystring"

export function Skills() {

    return (
        <div className="bg-bg-light dark:bg-bg-dark md:p-6 p-4 mt-8 rounded-lg shadow-lg md:scroll-my-24 " id="skills">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 px-2">Skills</h2>
            <div className="grid grid-cols-1 mb-4 gap-8">{
                SkillsList.map((skill) => (
                    <div key={String(skill.id)} className="flex flex-col gap-4  py-4 px-1" >
                        <h3 className="text-lg md:text-xl font-semibold underline">{skill?.category}</h3>
                        <div className="grid grid-cols-4 gap-12 ">
                            {skill?.properties.map((item) => (
                                <div className="cursor-pointer flex flex-col items-center justify-center" key={String(item.id)}>
                                    <div className="item-center scale-50 md:scale-100 hover:scale-125 transition-transform duration-200">{item.icon}</div>
                                    <div className="text-sm md:text-2xl font-semibold text-center">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }</div>
        </div>
    )
}

