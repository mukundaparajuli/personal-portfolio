import Image from "next/image";
import MukundaProfileImage from "@/assets/MukundaProfileImage.jpg"

export function Profile() {
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8 mt-24 flex items-center" >
            <Image className="w-36 h-36 bg-gray-700 rounded-md mr-6" src={MukundaProfileImage} alt="Mukunda"></Image>
            <div>
                <h1 className="text-4xl font-bold">Mukunda Parajuli</h1>
                <p className="text-lg">Full Stack Developer [ MERN Stack | NEXT JS ]</p>
                <p className="text-lg">B.E. in Electronics, Communication, and Information Engineering Student</p>
            </div>
        </div>
    )
}