import { Socials as SocialMediaList } from "@/constants/socials";
import Link from "next/link";

export function Socials() {
    return (
        <div className="bg-bg-light dark:bg-bg-dark p-6 rounded-lg shadow-lg mt-8 md:scroll-my-24" id="socials">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Socials</h2>
            <div className="p-6 md:mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
                {SocialMediaList.map((item) => (
                    <Link
                        href={item.url}
                        className="cursor-pointer flex flex-col items-center justify-center group"
                        key={String(item.id)}
                    >
                        <div className="item-center group-hover:scale-125 scale-50 md:scale-100 transition-transform duration-200">
                            {item.icon}
                        </div>
                        <div className="md:text-2xl text-md font-semibold text-center">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
