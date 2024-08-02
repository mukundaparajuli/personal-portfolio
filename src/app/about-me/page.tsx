import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full inset-0 flex items-center justify-center dark:bg-black bg-black p-0">
      <div className="container w-full relative">
        <div className="flex flex-col md:flex-row gap-8 p-8 border-2 border-slate-200 rounded-md relative bg-gradient-to-b from-neutral-200 to-neutral-100">
          <div className="absolute top-0 left-0 md:static md:flex-shrink-0 transform md:translate-x-0 md:translate-y-0 -translate-x-1/2 -translate-y-1/2 md:translate-none">
            {/* <img
              src="https://media.licdn.com/dms/image/D5603AQGUk4XJ1YijyQ/profile-displayphoto-shrink_800_800/0/1718229151596?e=1727913600&v=beta&t=2Cq1CTUo_uvzbmgTNxjNOSQv8DNCXQOtQ_ugzj2Vv5g"
              alt="Mukunda Parajuli"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto md:mx-0"
            /> */}
          </div>
          <div className="pt-24 md:pt-0 md:pl-24">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
