// // src/pages/ProjectDetailsIndex.tsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Badge, Button } from "flowbite-react";
import { portfolioData } from "../../database/AboutUsData";

const ProjectDetailsIndex: React.FC = () => {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center text-red-600 dark:text-red-400 mt-10">Project not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/about"
          className="inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400"
        >
          ← Back to Portfolio
        </Link>
      </div>

      <Card className="w-full bg-white dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        <div className="mb-4">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} color="info">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
          <p><strong>Role:</strong> {project.role}</p>
        </div>

        {project.link && (
          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 hover:underline dark:text-cyan-300 text-sm font-medium"
            >
              Visit Project →
            </a>
          </div>
        )}

        <div className="mt-6">
          <Button color="gray" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetailsIndex;
