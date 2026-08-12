import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './ProjectsSection.css';

function ProjectsSection() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <header className="projects-section__heading">
        <h2 id="projects-heading">Selected work</h2>
        <p>Projects 01&ndash;{String(projects.length).padStart(2, '0')}</p>
      </header>

      <div className="projects-section__list">
        {projects.map((project, index) => (
          <ProjectCard index={index + 1} key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
