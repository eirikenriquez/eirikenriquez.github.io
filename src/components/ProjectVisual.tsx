import type { Project, ProjectVisualId } from '../data/projects';
import perrinnOnboardImage from '../assets/perrinn-onboard.jpg';
import tinyHungrySharkGameplay from '../assets/tiny-hungry-shark-gameplay.png';
import './ProjectVisual.css';

const wordPerMinuteScreenshot =
  'https://raw.githubusercontent.com/eirikenriquez/The-Word-per-Minute/main/docs/images/home-page.png';
const flattiesWordmark =
  'https://raw.githubusercontent.com/Puddle-Dev/Flatties/main/flatties-frontend/src/assets/images/flatties-logo-title.png';

const lapTimes = [
  302.2134, 302.2134, 302.2134, 302.2134, 302.1177, 302.1182, 301.8486,
  301.8496, 301.8486, 300.9961, 300.9873, 300.9844, 300.959, 300.8828,
  300.8828, 300.8809, 300.8828, 300.8828, 300.7578, 300.7578, 300.7578,
  300.7578, 300.7578, 300.7539, 300.7578, 300.7539, 300.7578, 300.7578,
  300.7539, 300.7539,
];

const graphWidth = 620;
const graphHeight = 180;
const graphPadding = 12;
const fastestLap = Math.min(...lapTimes);
const slowestLap = Math.max(...lapTimes);
const graphPoints = lapTimes
  .map((lapTime, index) => {
    const x =
      graphPadding +
      (index / (lapTimes.length - 1)) * (graphWidth - graphPadding * 2);
    const y =
      graphPadding +
      ((lapTime - fastestLap) / (slowestLap - fastestLap)) *
        (graphHeight - graphPadding * 2);

    return `${x},${y}`;
  })
  .join(' ');

type ProjectArtworkProps = {
  visual: ProjectVisualId;
};

function ProjectArtwork({ visual }: ProjectArtworkProps) {
  switch (visual) {
    case 'word-per-minute':
      return (
        <img
          className="project-cover__background"
          src={wordPerMinuteScreenshot}
          alt=""
        />
      );

    case 'perrinn-424':
      return (
        <>
          <img
            className="project-cover__background"
            src={perrinnOnboardImage}
            alt=""
          />
          <div className="project-cover__graph">
            <header>
              <span>Best lap / generation</span>
              <strong>-1.460 s</strong>
            </header>
            <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
              <line x1="12" y1="12" x2="608" y2="12" />
              <line x1="12" y1="90" x2="608" y2="90" />
              <line x1="12" y1="168" x2="608" y2="168" />
              <polyline points={graphPoints} />
            </svg>
          </div>
        </>
      );

    case 'flatties':
      return (
        <div className="project-cover__flatties-artwork">
          <img src={flattiesWordmark} alt="" />
        </div>
      );

    case 'tiny-hungry-shark':
      return (
        <img
          className="project-cover__background"
          src={tinyHungrySharkGameplay}
          alt=""
        />
      );
  }
}

type ProjectVisualProps = {
  project: Project;
  projectNumber: string;
};

function ProjectVisual({ project, projectNumber }: ProjectVisualProps) {
  return (
    <div
      className={`project-cover project-cover--${project.visual}`}
      aria-hidden="true"
    >
      <div className="project-cover__artwork">
        <ProjectArtwork visual={project.visual} />
      </div>

      <div className="project-cover__wash" />

      <div className="project-cover__title">
        <span>Selected work</span>
        <p>{project.cover.title ?? project.name}</p>
      </div>

      <aside className="project-cover__rail">
        <header className="project-cover__rail-header">
          <p className="project-cover__rail-heading">Project file</p>
          <span>{projectNumber}</span>
        </header>

        <dl>
          <div>
            <dt>Status</dt>
            <dd>{project.status ?? 'Project'}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.cover.stack}</dd>
          </div>
          <div>
            <dt>{project.cover.detailLabel}</dt>
            <dd>{project.cover.detailValue}</dd>
          </div>
        </dl>

        <span className="project-cover__accent" />
      </aside>
    </div>
  );
}

export default ProjectVisual;
