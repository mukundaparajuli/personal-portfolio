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

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="invisible md:visible bg-gray-700 bg-opacity-90 p-2 rounded-b-md flex justify-between fixed top-0 center w-3/5 z-50 h-18">
                <Link href="/" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaHome style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Home
                    </div>
                </Link>
                <Link href="/#projects" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaLaptopCode style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Projects
                    </div>
                </Link>
                <Link href="/#blogs" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaBlog style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Blogs
                    </div>
                </Link>
                <Link href="/#skills" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaLightbulb style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Skills
                    </div>
                </Link>
                <Link href="/#socials" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaTelegram style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Socials
                    </div>
                </Link>
                <a href="/files/Resume.pdf" download="MukundaResume" className="flex flex-col justify-around p-2 items-center cursor-pointer group">
                    <FaDownload style={{ fontSize: "32px" }} />
                    <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">
                        Resume
                    </div>
                </a>
            </div>

            {/* Mobile View */}
            <div className="visible md:invisible flex justify-center items-start m-2 p-2">
                {!isOpen ? (
                    <FaBars style={{ fontSize: "32px" }} onClick={() => setIsOpen(true)} />
                ) : (
                    <div className="w-full">
                        <div className="text-2xl flex items-center w-full justify-between shadow-xl py-4">
                            <span className="font-semibold text-2xl">Menu</span>
                            <span onClick={() => setIsOpen(false)}>
                                <FaTimes style={{ fontSize: "32px" }} />
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <Link href="/" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaHome style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Home</div>
                            </Link>
                            <Link href="/#projects" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaLaptopCode style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Projects</div>
                            </Link>
                            <Link href="/#blogs" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaBlog style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Blogs</div>
                            </Link>
                            <Link href="/#skills" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaLightbulb style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Skills</div>
                            </Link>
                            <Link href="/#socials" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaTelegram style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Socials</div>
                            </Link>
                            <a href="/files/Resume.pdf" download="MukundaResume" className="flex justify-around shadow-md p-2 gap-4w-full items-center cursor-pointer group">
                                <FaDownload style={{ fontSize: "32px" }} />
                                <div className="text-lg transition-transform duration-200 font-bold">Resume</div>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
