"use-client";

import Link from "next/link";
import React from "react";
import { projects } from "../../constants";
import { CardBody, CardContainer, CardItem, useMouseEnter } from "./ui/3d-card";
import Image from "next/image";

const Projects = () => {
  const featureProjects = projects;
  return (
    <div className="my-8 flex flex-col justify-center items-center">
      <div className="text-center text-4xl font-bold">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featureProjects.map((project) => (
          <CardContainer key={project.name}>
            <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="px-4 p-2 border-2 border-slate-200 rounded-md font-semibold text-lg hover:bg-slate-200 hover:text-gray-900">
        <Link href={"/projects"}>All Projects</Link>
      </div>
    </div>
  );
};

export default Projects;
