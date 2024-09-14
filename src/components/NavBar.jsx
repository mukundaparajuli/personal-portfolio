import { FaHome, FaProjectDiagram, FaPhone, FaFile } from "react-icons/fa"

export function NavBar() {

    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg mb-4 flex justify-between fixed top-0 left-0 w-full z-50">
            <div className="flex flex-col items-center cursor-pointer">
                <FaHome style={{ fontSize: "32" }} />
                <span>Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <FaProjectDiagram style={{ fontSize: "32" }} />
                <span>Projects</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <FaPhone style={{ fontSize: "32" }} />
                <span>Contact</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <FaHome style={{ fontSize: "32" }} />
                <span>Skills</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <FaFile style={{ fontSize: "32" }} />
                <span>Resume</span>
            </div>
        </div>
    )
}
