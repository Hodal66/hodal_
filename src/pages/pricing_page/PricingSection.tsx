import React from "react";
import { Card } from "flowbite-react";

type PricingTier = {
  title: string;
  description: string;
  price: number;
  frequency: string;
  features: string[];
  teamSize: string;
  support: string;
  updates: string;
};

const pricingData: PricingTier[] = [
  {
    title: "Starter",
    description:
      "Best for personal or small business websites. Simple HTML/CSS or React-based static sites.",
    price: 49,
    frequency: "/project",
    features: [
      "Responsive Design (HTML, CSS, React)",
      "No setup or hidden fees",
    ],
    teamSize: "1 developer (Muheto Hodal)",
    support: "2 months",
    updates: "2 months",
  },
  {
    title: "Professional",
    description:
      "Ideal for growing teams needing fullstack apps, dashboards, or data labeling workflows.",
    price: 199,
    frequency: "/project",
    features: [
      "Fullstack Web App (React, Node, Python)",
      "Data Annotation or Labeling Integration",
    ],
    teamSize: "Project collaboration up to 5",
    support: "6 months",
    updates: "6 months",
  },
  {
    title: "Enterprise",
    description:
      "Best for corporate clients needing IT management, data strategy, or advanced development.",
    price: 799,
    frequency: "/solution",
    features: [
      "End-to-end IT Infrastructure",
      "Cloud setup, Security & Management",
    ],
    teamSize: "10+ devs, managed by Muheto",
    support: "12 months",
    updates: "12 months",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
           Data Meets Development
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          From personal brands to enterprise systems, I design and develop scalable digital solutions using modern technologies like React, Python, and cloud infrastructure.
          </p>
        </div>

        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className="mx-auto flex max-w-lg flex-col border border-gray-100 p-6 text-center shadow dark:border-gray-600 dark:bg-gray-800"
            >
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.title}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {plan.frequency}
                </span>
              </div>

              <ul
                role="list"
                className="mb-8 space-y-4 text-left text-sm text-gray-700 dark:text-gray-300"
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
                        12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                      0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                      011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">{plan.teamSize}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                      0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                      011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">{plan.support}</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                      0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                      011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">{plan.updates}</span>
                  </span>
                </li>
              </ul>

              <a
                href="#portfolio"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
              >
                 Get started
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
