import Link from "next/link";
import { ArrowUpRight } from "./ui/ArrowUpRight"
import Image from "next/image";
import Project from "@/assets/Project.webp"

export function Projects() {
    const arr = [1, 2, 3, 4]
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg ">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>

            {/* Main Projects */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {arr.map((a) => (
                    <div className="p-2 m-2 " key={a}>
                        <Image className="w-full h-64 bg-gray-600 mb-4" src={Project} alt="Project"></Image>
                        <h3 className="text-2xl font-bold">Project Name</h3>
                        <p className="text-lg text-gray-300 mb-2 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                        </p>
                        <div className="flex justify-between">
                            <Link href="#" className="text-white font-bold underline">Live Link</Link>
                            <Link href="#" className="text-white font-bold underline">Github</Link>
                        </div>
                    </div>)
                )}
            </div>

            {/* View All the projects */}
            <div className="text-right justify-center ">
                <Link href="#" className="text-white text-lg font-bold flex items-center justify-center">
                    <span>View all</span><ArrowUpRight />
                </Link>
            </div>
        </div>
    )
}