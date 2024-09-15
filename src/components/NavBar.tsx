import Link from "next/link"
import { FaHome, FaLaptopCode, FaPhone, FaTools, FaChartLine, FaBriefcase, FaStar, FaCodeBranch, FaLightbulb } from "react-icons/fa"
import { FaBlog, FaDownload, FaTelegram } from "react-icons/fa6"

export function NavBar() {

    return (
        <div className="bg-gray-700 bg-opacity-90 p-2 rounded-b-md flex justify-between fixed top-0 center w-3/5 z-50 h-18">
            <Link href="/" className="flex flex-col items-center cursor-pointer group">
                <FaHome style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Home</div>
            </Link>
            <Link href="/#projects" className="flex flex-col items-center cursor-pointer group">
                <FaLaptopCode style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Projects</div>
            </Link>
            <Link href="/#blogs" className="flex flex-col items-center cursor-pointer group">
                <FaBlog style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Blogs</div>
            </Link>
            <Link href="/#skills" className="flex flex-col items-center cursor-pointer group">
                <FaLightbulb style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Skills</div>
            </Link>
            <Link href="/#socials" className="flex flex-col items-center cursor-pointer group">
                <FaTelegram style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Socials</div>
            </Link>

            <a href="/files/Resume.pdf" download="MukundaResume" className="flex flex-col items-center cursor-pointer group">
                <FaDownload style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible transition-transform duration-200 font-bold">Resume</div>
            </a>
        </div>
    )
}
