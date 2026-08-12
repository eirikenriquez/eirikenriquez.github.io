import type { Project } from '../data/projects';
import './ProjectCard.css';

type ProjectCardProps = {
  index: number;
  project: Project;
};

function ProjectCard({ index, project }: ProjectCardProps) {
  const entryClassName = project.featured
    ? 'project-entry project-entry--featured'
    : 'project-entry';
  const projectNumber = String(index).padStart(2, '0');

  return (
    <article className={entryClassName}>
      <span className="project-entry__number" aria-hidden="true">
        {projectNumber}
      </span>

      <div className="project-entry__content">
        <div className="project-entry__heading">
          <p>{project.featured ? 'Featured project' : 'Project'}</p>
          {project.status && <span>{project.status}</span>}
        </div>

        <h3>{project.name}</h3>
        <p className="project-entry__description">{project.description}</p>

        <p
          className="project-entry__technologies"
          aria-label={`Technologies used: ${project.technologies.join(', ')}`}
        >
          {project.technologies.join(' · ')}
        </p>

        <div className="project-entry__links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
              <span aria-hidden="true">{'\u2197'}</span>
            </a>
          ))}
        </div>
      </div>

      {project.image && (
        <div className="project-entry__visual">
          <img src={project.image.src} alt={project.image.alt} />
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
