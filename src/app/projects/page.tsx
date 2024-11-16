import React from "react";
import Link from "next/link";
import Image from "next/image";
import Project from "@/assets/Project.webp"
import { Projects as ProjectList } from "@/constants/projects";
import { ABeeZee, Galdeano } from "next/font/google";
import { FaBackspace, FaBackward } from "react-icons/fa";
import { FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";

const galdeano = Galdeano({
  weight: '400',
  subsets: ['latin']
});
export default function Page() {

  return (
    <div className={galdeano.className}><div className="bg-bg-light dark:bg-bg-dark p-6 rounded-lg shadow-lg  dark:text-text-dark text-text-light" >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">Projects</h2>

      {/* Main Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
        {ProjectList.map((project) => (
          <div className="p-2 m-2 " key={project.id}>
            <Image className="w-full h-auto bg-gray-600 mb-4 hover:h-68" src={Project} alt="Project"></Image>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-md text-text-light dark:text-text-dark md:mb-2 mb-4 text-justify md:h-24">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 my-2  group">{
              project.tech.map((t, index) => (
                <span className="font-bold text-sm p-1 cursor-pointer bg-gray-400 text-black rounded-md hover:text-gray-400 hover:bg-black transition-transform duration-5l00" key={index}>{t}</span>
              ))
            }</div>
            <div className="flex justify-between">
              <Link href={project.url} className="text-gray-600 dark:text-white font-bold underline text-sm md:text-md">Live Link</Link>
              <Link href={project.githubUrl} className="text-gray-600 dark:text-white font-bold underline text-sm md:text-md">GitHub</Link>
            </div>


          </div>)
        )}
      </div>
      <hr />
      <Link href="/" className="font-bold text-2xl mt-8 flex items-center justify-center gap-4">
        <FaArrowLeft className="dark:text-white text-text-light" />Back to main
      </Link>
    </div></div>
  )
}