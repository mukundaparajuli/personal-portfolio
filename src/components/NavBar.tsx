"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaHome,
    FaLaptopCode,
    FaBlog,
    FaLightbulb,
    FaTelegram,
    FaDownload,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Desktop View */}
            <div className="invisible md:visible bg-bg-light dark:bg-bg-dark bg-opacity-90 p-2 rounded-b-md flex justify-between fixed top-0 center w-3/5 z-50 ">
                <Link href="/" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaHome style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Home
                    </div>
                </Link>
                <Link href="/#projects" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaLaptopCode style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Projects
                    </div>
                </Link>
                <Link href="/#blogs" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaBlog style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Blogs
                    </div>
                </Link>
                <Link href="/#skills" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaLightbulb style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Skills
                    </div>
                </Link>
                <Link href="/#socials" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaTelegram style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Socials
                    </div>
                </Link>
                <a href="/files/Resume.pdf" download="MukundaResume" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaDownload style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold dark:text-text-dark text-text-light">
                        Resume
                    </div>
                </a>
            </div>

            {/* Mobile View */}
            <div className="visible md:invisible flex justify-center items-start m-2 p-2">
                {!isOpen ? (
                    <div className="flex items-center justify-between w-full">
                        <FaBars style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" onClick={() => setIsOpen(true)} />
                        <ThemeToggle />
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="text-2xl flex items-center w-full justify-between py-4 bg-slate-300 dark:bg-gray-800">
                            <span className="font-semibold text-2xl dark:text-text-dark text-text-light">Menu</span>
                            <span onClick={() => setIsOpen(false)}>
                                <FaTimes style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                            </span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaHome style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Home</div>
                            </Link>
                            <Link href="/#projects" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaLaptopCode style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Projects</div>
                            </Link>
                            <Link href="/#blogs" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaBlog style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Blogs</div>
                            </Link>
                            <Link href="/#skills" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaLightbulb style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Skills</div>
                            </Link>
                            <Link href="/#socials" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaTelegram style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Socials</div>
                            </Link>
                            <a href="/files/Resume.pdf" download="MukundaResume" className="flex justify-around shadow-md p-2 gap-4 w-full items-center cursor-pointer group dark:bg-gray-800 bg-slate-300">
                                <FaDownload style={{ fontSize: "32px" }} className="text-gray-800 dark:text-gray-200" />
                                <div className="text-lg transition-transform duration-200 font-bold dark:text-text-dark text-text-light">Resume</div>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
