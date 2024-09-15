import Link from "next/link";
import { ArrowUpRight } from "./ui/ArrowUpRight"
import Image from "next/image";
import Project from "@/assets/Project.webp"
import { Projects as ProjectList } from "@/constants/projects";

export function Projects() {

    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mt-8" id="projects">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>

            {/* Main Projects */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {ProjectList.map((project) => (
                    <div className="p-2 m-2 " key={project.id}>
                        <Image className="w-full h-auto bg-gray-600 mb-4 hover:h-68" src={Project} alt="Project"></Image>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-lg text-gray-300 mb-2 text-justify h-28">
                            {project.description}
                        </p>
                        <div className="flex gap-2 my-4 group">{
                            project.tech.map((t, index) => (
                                <span className="font-bold text-sm p-1 cursor-pointer bg-gray-400 text-black rounded-md hover:text-gray-400 hover:bg-black transition-transform duration-500" key={index}>{t}</span>
                            ))
                        }</div>
                        <div className="flex justify-between">
                            <Link href="#" className="text-white font-bold underline">Live Link</Link>
                            <Link href={project.githubUrl} className="text-white font-bold underline">GitHub</Link>
                        </div>
                    </div>)
                )}
            </div>

            {/* View All the projects */}
            <div className="text-right justify-center ">
                <Link href="/projects" className="text-white text-lg font-bold flex items-center justify-center">
                    <span>View all</span><ArrowUpRight />
                </Link>
            </div>
        </div>
    )
}