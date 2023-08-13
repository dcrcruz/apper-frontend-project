import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Spring Boot" },
  { skill: "Unit Testing" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Linux" },
  { skill: "Git" },
  { skill: "AWS" },
  { skill: "Functional Testing" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Derick, and I am a{" "}
              <span className="font-semibold text-teal-600">{"driven "}</span>,
              <span className="font-semibold text-teal-600">{" eager "}</span>,
              and
              <span className="font-semibold text-teal-600">
                {" self-motivated "}
              </span>{" "}
              Software Engineer based in Manila, Philippines.
            </p>
            <br />
            <p>
              I graduated from Mapua University with a degree of{" "}
              <span className="font-semibold text-teal-600">
                {"BS Electronics Engineering "}
              </span>{" "}
              specializing in{" "}
              <span className="font-semibold text-teal-600">
                {" Advanced Internet Protocol Networking"}
              </span>
              .
            </p>
            <br />
            <p>
              After graduating, I immediately got a job to pursue a career in
              the IT Industry. My first job role was a QA Engineer and it became
              my stepping stone to this vast, unfamiliar, yet exciting new world
              of software development, and now I am{" "}
              <span className="font-semibold text-teal-600">
                {"training as a Software Engineer "}
              </span>
              . I always look for opportunities for growth whether be it in my
              personal or professional life.
            </p>
            <br />
            <p>
              On my free time, I have a wide range of hobbies, like playing
              basketball, video games, reading, listening to podcasts, watching
              movies, etc. I also keep my skills relevant by taking courses and
              practicing them. I have a lot of interests and be busy but I keep
              all things in balance, which I firmly believe is the secret to a
              <span className="font-semibold text-teal-600">
                {" good life"}
              </span>
              .
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {/* list skills */}
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <br />
            {/* certifications, licenses, badges section */}
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Certifications</h1>
              <br />
              <div className="flex space-x-4">
                <a href="https://www.credly.com/badges/945fcf6d-8b72-499a-a4f3-40edc5a92b66/public_url">
                  <Image src="/badge-aws.png" alt="" width={350} height={350} />
                </a>
                <a href="https://www.credly.com/badges/f601ed01-ae85-44c4-80e5-6cde6a4b50d5/public_url">
                  <Image src="/badge-cc.png" alt="" width={350} height={350} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
