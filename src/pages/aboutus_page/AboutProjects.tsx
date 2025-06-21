// src/sections/PortfolioSection.tsx
import React from "react";
import { portfolioData } from "../../database/AboutUsData";
import PortfolioCard from "../../components/cards/PortfolioCard";

const AboutProjects: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Portfolio</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
