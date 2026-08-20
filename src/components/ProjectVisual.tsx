import type { ProjectVisualId } from '../data/projects';
import perrinnOnboardImage from '../assets/perrinn-onboard.jpg';
import tinyHungrySharkGameplay from '../assets/tiny-hungry-shark-gameplay.png';
import tinyHungrySharkLogo from '../assets/tiny-hungry-shark-logo.png';
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

type ProjectVisualProps = {
  visual: ProjectVisualId;
};

function WordPerMinuteVisual() {
  return (
    <div className="project-visual project-visual--word-per-minute">
      <div className="project-visual__browser">
        <div className="project-visual__browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img
          src={wordPerMinuteScreenshot}
          alt="The Word per Minute home page"
        />
      </div>
    </div>
  );
}

function PerrinnVisual() {
  return (
    <div className="project-visual project-visual--perrinn">
      <img
        className="project-visual__perrinn-image"
        src={perrinnOnboardImage}
        alt="PERRINN 424 simulation onboard at the Nürburgring"
      />

      <div className="project-visual__graph">
        <header>
          <span>Best lap / generation</span>
          <strong>-1.460 s</strong>
        </header>
        <svg
          viewBox={`0 0 ${graphWidth} ${graphHeight}`}
          role="img"
          aria-label="Best lap time improving from 5 minutes 2.213 seconds to 5 minutes 0.754 seconds over 30 generations"
        >
          <line x1="12" y1="12" x2="608" y2="12" />
          <line x1="12" y1="90" x2="608" y2="90" />
          <line x1="12" y1="168" x2="608" y2="168" />
          <polyline points={graphPoints} />
        </svg>
        <footer>
          <span>GEN 01 &middot; 5:02.213</span>
          <span>GEN 30 &middot; 5:00.754</span>
        </footer>
      </div>

      <p className="project-visual__credit">Simulation footage: PERRINN</p>
    </div>
  );
}

function FlattiesVisual() {
  return (
    <div className="project-visual project-visual--flatties">
      <header className="project-visual__flatties-header">
        <span>Property listing app</span>
        <span>AKL / 2023</span>
      </header>

      <div className="project-visual__flatties-brand">
        <img src={flattiesWordmark} alt="Flatties" />
        <p>Find somewhere to belong.</p>
      </div>

      <footer className="project-visual__flatties-footer" aria-hidden="true">
        <span>Team project</span>
        <span>Browse / Search / List</span>
      </footer>
    </div>
  );
}

function TinyHungrySharkVisual() {
  return (
    <div className="project-visual project-visual--tiny-shark">
      <figure className="project-visual__tiny-gameplay">
        <img
          src={tinyHungrySharkGameplay}
          alt="Tiny Hungry Shark gameplay with fish, jellyfish, and underwater hazards"
        />
      </figure>

      <div className="project-visual__tiny-title">
        <img src={tinyHungrySharkLogo} alt="Tiny Hungry Shark" />
      </div>

      <p className="project-visual__tiny-jam">
        My First Game Jam <span>Winter 2023</span>
      </p>
    </div>
  );
}

function ProjectVisual({ visual }: ProjectVisualProps) {
  switch (visual) {
    case 'word-per-minute':
      return <WordPerMinuteVisual />;
    case 'perrinn-424':
      return <PerrinnVisual />;
    case 'flatties':
      return <FlattiesVisual />;
    case 'tiny-hungry-shark':
      return <TinyHungrySharkVisual />;
  }
}

export default ProjectVisual;
