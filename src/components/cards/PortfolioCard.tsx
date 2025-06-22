// src/components/PortfolioCard.tsx
import { Card } from "flowbite-react";
import { PortfolioItem } from "../../database/AboutUsData";
import { Link } from "react-router-dom";

type Props = {
  project: PortfolioItem;
};

const PortfolioCard: React.FC<Props> = ({ project }) => {
  return (
    <Card className="max-w-sm" imgAlt={project.title} imgSrc={project.image}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {project.title}
      </h5>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{project.description}</p>

      <div className="flex items-center justify-between">
        {project.price !== undefined ? (
          <span className="text-2xl font-bold text-gray-900 dark:text-white">${project.price}</span>
        ) : (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{project.role}</span>
        )}
       
         <Link
          to={`/project/${project.id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-800"
        >
          View Project Details
        </Link>
      </div>
    </Card>
  );
};

export default PortfolioCard;

