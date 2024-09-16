import Image from "next/image";
import MukundaProfileImage from "@/assets/MukundaProfileImage.jpg"

export function Profile() {
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8 md:mt-16 flex md:flex-row items-center flex-col" >
            <Image className="w-28 h-28 md:w-36 md:h-36 bg-gray-700 rounded-md mr-6 md:mb-0 mb-4" src={MukundaProfileImage} alt="Mukunda"></Image>
            <div>
                <h1 className="text-2xl md:text-4xl font-bold">Mukunda Parajuli</h1>
                <p className="text-md md:text-lg">Full Stack Developer [ MERN Stack | NEXT JS ]</p>
                <p className="text-md md:text-lg">Electronics, Communication and Information Engineering Student</p>
            </div>
        </div>
    )
}