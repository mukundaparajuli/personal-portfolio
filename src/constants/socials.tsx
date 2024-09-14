import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

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
        icon: <FaLinkedin style={{ fontSize: "40" }} />
    },

    {
        id: 2,
        title: "GitHub",
        url: "https://github.com/mukundaparajuli",
        icon: <FaGithub style={{ fontSize: "40" }} />
    },
    {
        id: 3,
        title: "Twitter",
        url: "https://twitter.com/m76760052",
        icon: <FaTwitter style={{ fontSize: "40" }} />
    },
    {
        id: 4,
        title: "FaceBook",
        url: "https://www.facebook.com/mukunda.parajuli.1232",
        icon: <FaFacebook style={{ fontSize: "40" }} />
    },
    {
        id: 5,
        title: "Instagram",
        url: "https://instagram.com/mukundaparajuli13",
        icon: <FaInstagram style={{ fontSize: "40" }} />
    }
]