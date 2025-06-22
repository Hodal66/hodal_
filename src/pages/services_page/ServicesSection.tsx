import React from "react";
import type { JSX } from "react/jsx-dev-runtime";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const services: Service[] = [
  {
    title: "Fullstack Web Development",
    description:
      "Design and develop scalable frontend and backend solutions using React, JavaScript, Python, and Node.js.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h10a2 2 0 002-2V5a1 1 0 100-2H3z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, accessible interfaces with responsive layouts and engaging user experiences using Figma and Tailwind CSS.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
      </svg>
    ),
  },
  {
    title: "Data Annotation & Review",
    description:
      "Provide high-quality labeled data for machine learning models through structured annotation and QA processes.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v1h2V5z" />
      </svg>
    ),
  },
  {
    title: "IT Infrastructure & Support",
    description:
      "Manage company-wide systems, networks, and security. Lead IT teams and support digital operations at scale.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Coordinate teams, set milestones, and deliver IT projects using Agile practices and tools for effective workflow.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.5 1.5 0 01-2.29.95c-1.37-.83-2.94.73-2.1 2.1.54.89.06 2.04-.95 2.29-1.56.38-1.56 2.6 0 2.98.89.22 1.39 1.4.95 2.29-.83 1.37.73 2.94 2.1 2.1a1.5 1.5 0 012.29.95c.38 1.56 2.6 1.56 2.98 0a1.5 1.5 0 012.29-.95c1.37.83 2.94-.73 2.1-2.1a1.5 1.5 0 01.95-2.29c1.56-.38 1.56-2.6 0-2.98a1.5 1.5 0 01-.95-2.29c.83-1.37-.73-2.94-2.1-2.1a1.5 1.5 0 01-2.29-.95zM10 13a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    title: "Tech Training & Mentorship",
    description:
      "Support skill development through practical training, mentoring junior developers, and leading workshops.",
    icon: (
      <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.05l5.144-2.2L9.5 5.5 7 6.5l3 1.5 7-3a1 1 0 000-1.84l-7-3z" />
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Expertise & Services
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            I offer a range of services backed by hands-on experience in development, IT management, and data annotation. Whether you're building a product or leading a team, I can help you reach your technical goals.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
