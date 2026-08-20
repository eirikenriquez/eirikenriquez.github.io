import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { projects, type Project } from '../data/projects';
import ProjectVisual from './ProjectVisual';
import './ProjectsSection.css';

type NavigationDirection = 'previous' | 'next';

type CarouselTransition = {
  direction: NavigationDirection;
  outgoingIndex: number;
};

type ProjectDetailsProps = {
  animationClassName?: string;
  isOutgoing?: boolean;
  project: Project;
};

const transitionDuration = 370;

function ProjectDetails({
  animationClassName = '',
  isOutgoing = false,
  project,
}: ProjectDetailsProps) {
  return (
    <article
      className={`projects-section__details ${animationClassName}`.trim()}
      aria-hidden={isOutgoing || undefined}
    >
      <div className="projects-section__copy">
        <p className="projects-section__status">{project.status ?? 'Project'}</p>
        <h3>{project.name}</h3>
        <p className="projects-section__description">{project.description}</p>
        <p
          className="projects-section__technologies"
          aria-label={`Technologies used: ${project.technologies.join(', ')}`}
        >
          {project.technologies.join(' · ')}
        </p>
      </div>

      <div className="projects-section__links">
        {project.links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            tabIndex={isOutgoing ? -1 : undefined}
          >
            {link.label}
            <ExternalLink aria-hidden="true" size={14} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState<CarouselTransition | null>(null);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef<number | null>(null);
  const activeProject = projects[activeIndex];
  const projectNumber = String(activeIndex + 1).padStart(2, '0');
  const projectCount = String(projects.length).padStart(2, '0');

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  function showProject(direction: NavigationDirection) {
    if (isTransitioningRef.current) {
      return;
    }

    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % projects.length
        : (activeIndex - 1 + projects.length) % projects.length;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setActiveIndex(nextIndex);
      return;
    }

    isTransitioningRef.current = true;
    setTransition({ direction, outgoingIndex: activeIndex });
    setActiveIndex(nextIndex);

    transitionTimerRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false;
      setTransition(null);
      transitionTimerRef.current = null;
    }, transitionDuration);
  }

  function showPreviousProject() {
    showProject('previous');
  }

  function showNextProject() {
    showProject('next');
  }

  const outgoingProject = transition
    ? projects[transition.outgoingIndex]
    : null;
  const outgoingProjectNumber = transition
    ? String(transition.outgoingIndex + 1).padStart(2, '0')
    : '';
  const directionClassName = transition
    ? `projects-section__motion--${transition.direction}`
    : '';
  const incomingClassName = transition
    ? `projects-section__panel--incoming ${directionClassName}`
    : '';
  const outgoingClassName = transition
    ? `projects-section__panel--outgoing ${directionClassName}`
    : '';

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <header className="projects-section__heading">
        <h2 id="projects-heading">Selected work</h2>
        <p>
          {projectNumber} / {projectCount}
        </p>
      </header>

      <p
        className="projects-section__announcement"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {activeProject.name}, project {activeIndex + 1} of {projects.length}
      </p>

      <div className="projects-section__stage">
        <button
          className="projects-section__control projects-section__control--previous"
          type="button"
          onClick={showPreviousProject}
          aria-label="Show previous project"
          aria-disabled={transition !== null || undefined}
        >
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.5} />
        </button>

        <div className="projects-section__visual">
          {outgoingProject && (
            <div
              className={`projects-section__visual-panel ${outgoingClassName}`}
              aria-hidden="true"
            >
              <ProjectVisual
                project={outgoingProject}
                projectNumber={outgoingProjectNumber}
              />
            </div>
          )}

          <div
            className={`projects-section__visual-panel ${incomingClassName}`.trim()}
          >
            <ProjectVisual
              project={activeProject}
              projectNumber={projectNumber}
            />
          </div>
        </div>

        <button
          className="projects-section__control projects-section__control--next"
          type="button"
          onClick={showNextProject}
          aria-label="Show next project"
          aria-disabled={transition !== null || undefined}
        >
          <ChevronRight aria-hidden="true" size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="projects-section__details-frame">
        {outgoingProject && (
          <ProjectDetails
            animationClassName={outgoingClassName}
            isOutgoing
            project={outgoingProject}
          />
        )}

        <ProjectDetails
          animationClassName={incomingClassName}
          project={activeProject}
        />
      </div>

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
