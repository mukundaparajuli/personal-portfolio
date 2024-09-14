import { Socials as SocialMediaList } from "@/constants/socials"
import Link from "next/link"

export function Socials() {
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mt-8" >
            <h2 className="text-4xl font-semibold mb-4">Socials</h2>
            <div className="grid grid-cols-5 p-4">
                {SocialMediaList.map((item) => (
                    <Link href={item.url} className="cursor-pointer flex flex-col items-center justify-center" key={String(item.id)}>
                        <div className="item-center">{item.icon}</div>
                        <div className="text-2xl font-semibold text-center">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div >
    )
}