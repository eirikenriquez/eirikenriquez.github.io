import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectVisual from './ProjectVisual';
import './ProjectsSection.css';

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const projectNumber = String(activeIndex + 1).padStart(2, '0');
  const projectCount = String(projects.length).padStart(2, '0');

  function showPreviousProject() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    );
  }

  function showNextProject() {
    setActiveIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <header className="projects-section__heading">
        <h2 id="projects-heading">Selected work</h2>
        <p aria-live="polite">
          {projectNumber} / {projectCount}
        </p>
      </header>

      <div className="projects-section__stage">
        <button
          className="projects-section__control projects-section__control--previous"
          type="button"
          onClick={showPreviousProject}
          aria-label="Show previous project"
        >
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.5} />
        </button>

        <div className="projects-section__visual">
          <ProjectVisual
            project={activeProject}
            projectNumber={projectNumber}
          />
        </div>

        <button
          className="projects-section__control projects-section__control--next"
          type="button"
          onClick={showNextProject}
          aria-label="Show next project"
        >
          <ChevronRight aria-hidden="true" size={20} strokeWidth={1.5} />
        </button>
      </div>

      <article className="projects-section__details" aria-live="polite">
        <div className="projects-section__copy">
          <p className="projects-section__status">
            {activeProject.status ?? 'Project'}
          </p>
          <h3>{activeProject.name}</h3>
          <p className="projects-section__description">{activeProject.description}</p>
          <p
            className="projects-section__technologies"
            aria-label={`Technologies used: ${activeProject.technologies.join(', ')}`}
          >
            {activeProject.technologies.join(' · ')}
          </p>
        </div>

        <div className="projects-section__links">
          {activeProject.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </article>

      <div className="projects-section__progress" aria-hidden="true">
        {projects.map((project, index) => (
          <span
            className={index === activeIndex ? 'is-active' : undefined}
            key={project.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
