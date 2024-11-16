import { BsMailbox } from "react-icons/bs";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface Social {
    id: number,
    title: string,
    url: string,
    icon: React.ReactElement,
}

export const Socials: Social[] = [
    {
        id: 1,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/mukundaparajuli/",
        icon: <FaLinkedin className="text-[40px]" />
    },

    {
        id: 2,
        title: "GitHub",
        url: "https://github.com/mukundaparajuli",
        icon: <FaGithub className="text-[40px]" />
    },
    {
        id: 3,
        title: "Twitter",
        url: "https://twitter.com/m76760052",
        icon: <FaTwitter className="text-[40px]" />
    },
    {
        id: 4,
        title: "Facebook",
        url: "https://www.facebook.com/mukunda.parajuli.1232",
        icon: <FaFacebook className="text-[40px] " />
    },
    {
        id: 5,
        title: "Instagram",
        url: "https://instagram.com/mukundaparajuli13",
        icon: <FaInstagram className="text-[40px]" />
    },
    {
        id: 6,
        title: "Gmail",
        url: "mailto: mukundaparajuli13@gmail.com",
        icon: <MdEmail className="text-[40px]" />
    }
]

