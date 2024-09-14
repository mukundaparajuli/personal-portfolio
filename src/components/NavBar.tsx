import Link from "next/link"
import { FaHome, FaProjectDiagram, FaPhone } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6"

export function NavBar() {

    return (
        <div className="bg-gray-700 bg-opacity-40 p-2 rounded-md flex justify-between fixed top-2 center w-3/5 z-50 h-18">
            <Link href="/" className="flex flex-col items-center cursor-pointer group">
                <FaHome style={{ fontSize: "32px" }} />
                <div className="text-lg invisible group-hover:visible">Home</div>
            </Link>
            <Link href="/#projects" className="flex flex-col items-center cursor-pointer group">
                <FaProjectDiagram style={{ fontSize: "32px" }} />
                <div className="text-lg invisible group-hover:visible">Projects</div>
            </Link>
            <Link href="/#contact" className="flex flex-col items-center cursor-pointer group">
                <FaPhone style={{ fontSize: "32px" }} />
                <div className="text-lg invisible group-hover:visible">Contact</div>
            </Link>
            <Link href="/#skills" className="flex flex-col items-center cursor-pointer group">
                <FaHome style={{ fontSize: "32px" }} />
                <div className="text-lg invisible group-hover:visible">Skills</div>
            </Link>
            <a href="/files/Resume.pdf" download="MukundaResume" className="flex flex-col items-center cursor-pointer group">
                <FaDownload style={{ fontSize: "32px" }} />
                <div className="text-lg invisible group-hover:visible">Resume</div>
            </a>
        </div>
    )
}
