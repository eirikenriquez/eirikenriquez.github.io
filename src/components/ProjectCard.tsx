import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import wordmark from '../assets/the-word-per-minute-wordmark.svg';
import './ProjectCard.css';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        <img src={wordmark} alt="" />
      </div>

      <div className="project-card__content">
        <div className="project-card__heading">
          <p>Featured project</p>
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
