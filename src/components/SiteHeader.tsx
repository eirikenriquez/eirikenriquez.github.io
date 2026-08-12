import { RotateCcw } from 'lucide-react';
import './SiteHeader.css';

type SiteHeaderProps = {
  onReplayIntro: () => void;
};

function SiteHeader({ onReplayIntro }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a
        className="site-header__wordmark"
        href="#top"
        aria-label="Eirik's portfolio home"
      >
        <span className="site-header__smile" aria-hidden="true">
          &#9786;
        </span>
        <span>Eirik Enriquez</span>
      </a>

      <p className="site-header__description">projects and a little real life</p>

      <nav className="site-header__navigation" aria-label="Main navigation">
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <button type="button" onClick={onReplayIntro}>
          <RotateCcw aria-hidden="true" size={15} />
          Replay intro
        </button>
      </nav>
    </header>
  );
}

export default SiteHeader;
