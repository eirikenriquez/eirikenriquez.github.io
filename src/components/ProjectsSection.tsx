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
        <p>Selected work</p>
        <h2 id="projects-heading">Featured projects</h2>
      </header>

      <div className="projects-section__list">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
