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
      <div className="mb-4 mt-2.5 flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < Math.round(project.rating) ? "text-yellow-300" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1..." />
          </svg>
        ))}
        <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
          {project.rating.toFixed(1)}
        </span>
      </div>
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

