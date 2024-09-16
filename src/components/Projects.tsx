import Link from "next/link";
import { ArrowUpRight } from "./ui/ArrowUpRight"
import Image from "next/image";
import Project from "@/assets/Project.webp"
import { Projects as ProjectList } from "@/constants/projects";

export function Projects() {

    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mt-8 md:scroll-my-24" id="projects">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Projects</h2>

            {/* Main Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                {ProjectList.map((project) => (
                    <div className="p-2 m-2 " key={project.id}>
                        <Image className="w-full h-auto bg-gray-600 mb-4 hover:h-68" src={Project} alt="Project"></Image>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-md text-gray-300 md:mb-2 mb-4 text-justify md:h-24">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 my-2  group">{
                            project.tech.map((t, index) => (
                                <span className="font-bold text-sm p-1 cursor-pointer bg-gray-400 text-black rounded-md hover:text-gray-400 hover:bg-black transition-transform duration-5l00" key={index}>{t}</span>
                            ))
                        }</div>
                        <div className="flex justify-between">
                            <Link href={project.url} className="text-white font-bold underline text-sm md:text-md">Live Link</Link>
                            <Link href={project.githubUrl} className="text-white font-bold underline text-sm md:text-md">GitHub</Link>
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