import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import './ProjectCard.css';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const cardClassName = project.featured
    ? 'project-card project-card--featured'
    : 'project-card';

  return (
    <article className={cardClassName}>
      {project.image && (
        <div className="project-card__visual">
          <img src={project.image.src} alt={project.image.alt} />
        </div>
      )}

      <div className="project-card__content">
        <div className="project-card__heading">
          <p>{project.featured ? 'Featured project' : 'Project'}</p>
          {project.status && <span>{project.status}</span>}
        </div>

        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.links.map((link, index) => (
            <a
              className={index === 0 ? 'project-card__primary-link' : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
