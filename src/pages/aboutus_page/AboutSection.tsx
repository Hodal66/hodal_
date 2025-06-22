import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        {/* Light/Dark mode responsive images */}
        <img
          className="w-full dark:hidden"
          src="/images/personal/Design1.png"
          alt="dashboard mockup"
        />
        <img
          className="hidden w-full dark:block"
          src="/images/personal/Design1.png"
          alt="dashboard mockup dark"
        />

        {/* About content */}
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Building scalable tech, bridging data and design.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            I'm Muheto Hodal, a Fullstack Developer and ICT professional with
            experience in developing intuitive web apps, managing IT
            infrastructure, and contributing to AI projects through precise data
            annotation. I believe in creating tools that drive growth and
            simplify work.
          </p>
          <a
            href="/contact"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
          >
            Let's Connect
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                   1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                   11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 
                   0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
