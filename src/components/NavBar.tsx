import Link from "next/link"
import { FaHome, FaLaptopCode, FaPhone, FaTools, FaChartLine, FaBriefcase, FaStar, FaCodeBranch, FaLightbulb } from "react-icons/fa"
import { FaDownload, FaTelegram } from "react-icons/fa6"

export function NavBar() {

    return (
        <div className="bg-gray-700 bg-opacity-40 p-2 rounded-md flex justify-between fixed top-2 center w-3/5 z-50 h-18">
            <Link href="/" className="flex flex-col items-center cursor-pointer group">
                <FaHome style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible font-bold">Home</div>
            </Link>
            <Link href="/#projects" className="flex flex-col items-center cursor-pointer group">
                <FaLaptopCode style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible font-bold">Projects</div>
            </Link>
            <Link href="/#skills" className="flex flex-col items-center cursor-pointer group">
                <FaLightbulb style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible font-bold">Skills</div>
            </Link>
            <Link href="/#contact" className="flex flex-col items-center cursor-pointer group">
                <FaTelegram style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible font-bold">Social</div>
            </Link>

            <a href="/files/Resume.pdf" download="MukundaResume" className="flex flex-col items-center cursor-pointer group">
                <FaDownload style={{ fontSize: "32px" }} />
                <div className="text-lg invisible underline group-hover:visible font-bold">Resume</div>
            </a>
        </div>
    )
}
