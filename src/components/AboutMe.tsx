import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full inset-0 flex items-center justify-center dark:bg-black bg-black p-0 ">
      <div className="container w-full ">
        <div className="flex flex-col md:flex-row  gap-8">
          <div className="flex-shrink-0">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQGUk4XJ1YijyQ/profile-displayphoto-shrink_800_800/0/1718229151596?e=1727913600&v=beta&t=2Cq1CTUo_uvzbmgTNxjNOSQv8DNCXQOtQ_ugzj2Vv5g"
              alt="Mukunda Parajuli"
              width="160"
              height="160"
              className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-md"
            />
          </div>
          <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-100 py-8 p-4 cursor-pointer gap-2 text-justify border-2 border-slate-200 rounded-md">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              Hi, I'm Mukunda Parajuli, an Electronics Communication and
              Information Engineering student with a passion for technology and
              innovation. With a solid foundation in web development, I
              specialize in creating dynamic and responsive websites using the
              MERN stack and Next.js.
            </p>
            <p className="text-lg mb-4">
              My journey into the world of coding started out of curiosity and
              quickly grew into a profound interest. Over the years, I have
              honed my skills by working on various projects, ranging from small
              personal websites to complex web applications. I enjoy tackling
              challenges and continuously strive to learn new technologies and
              improve my craft.
            </p>
            <p className="text-lg mb-4">
              Beyond coding, I have a keen interest in exploring emerging
              technologies, particularly in the fields of blockchain and
              artificial intelligence. I believe in the power of technology to
              transform lives and am dedicated to leveraging my skills to make a
              positive impact.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me reading, exploring new
              places, or engaging in activities that push my creative
              boundaries. I'm always eager to connect with like-minded
              individuals and collaborate on exciting projects.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutMe;
