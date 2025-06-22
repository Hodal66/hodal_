import React from "react";

const AboutExpandedSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        {/* Left: Text Content */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            More than code: strategy, design & leadership
          </h2>
          <p className="mb-4">
            I'm Muheto Hodal — a Fullstack Developer, UI/UX Designer, and ICT Manager with hands-on experience across industries. I don't just write code; I help companies build better products, improve workflows, and implement smart digital solutions.
          </p>
          <p className="mb-4">
            I’ve worked on enterprise dashboards, AI data pipelines, responsive user interfaces, and backend systems using modern stacks like React, Node, and Python. I’ve led teams, managed IT infrastructure, and designed tools that scale with business needs.
          </p>
          <p>
            I bring the adaptability of a startup mindset and the structure of enterprise execution. Whether you're launching a product or scaling a system, I’m equipped to contribute — technically, creatively, and strategically.
          </p>
        </div>

        {/* Right: Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="Teamwork and technology"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="Working environment"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutExpandedSection;
