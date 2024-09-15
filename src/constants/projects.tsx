interface ProjectInterface {
    id: number,
    title: string,
    description: string,
    githubUrl: string,
    url: string,
    image: string,
    tech: string[]
}

export const Projects: ProjectInterface[] = [
    {
        id: 1,
        title: "Mern Blog",
        description: "A blogging platform where users can create, edit, and comment on posts. Features JWT-based authentication, a rich text editor, and responsive design for all devices.",
        githubUrl: "https://github.com/mukundaparajuli/mern-blog",
        url: "",
        image: "",
        tech: ["React JS", "Tailwind CSS", "Node JS", "MongoDB"]
    },
    {
        id: 2,
        title: "Mern Chat",
        description: "A real-time chat app using WebSockets for instant messaging and file sharing. Secure JWT authentication and responsive design ensure smooth communication across devices.",
        githubUrl: "https://github.com/mukundaparajuli/mern-chat",
        url: "",
        image: "",
        tech: ["React JS", "Node JS", "MongoDB", "Tailwind CSS", "WebSockets"]
    },
    {
        id: 4,
        title: "Youtube Clone",
        description: "A YouTube-like platform using the YouTube API for video searches and viewing. Includes live chat polling and a responsive interface across all devices.",
        githubUrl: "https://github.com/mukundaparajuli/youtube-clone-using-react",
        url: "",
        image: "",
        tech: ["React JS", "MongoDB", "Tailwind CSS", "Youtube API"]
    },
    {
        id: 5,
        title: "Netflix-Gemini",
        description: "A movie discovery app using the TMDB API and AI-enabled search. Offers personalized recommendations, with a responsive design for smooth user experience.",
        githubUrl: "https://github.com/mukundaparajuli/netflix-gemini",
        url: "",
        image: "",
        tech: ["React JS", "Gemini Api", "TMDB", "Tailwind CSS"]
    }
]