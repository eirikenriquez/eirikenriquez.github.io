import './FriendsterHeader.css';

function FriendsterHeader() {
  return (
    <header className="friendster-header">
      <div className="friendster-header__masthead">
        <a
          className="friendster-header__wordmark"
          href="#top"
          aria-label="Eirik's portfolio home"
        >
          <span className="friendster-header__smile" aria-hidden="true">
            &#9786;
          </span>
          <span>eirikster.</span>
        </a>

        <p className="friendster-header__tagline">
          Projects, notes, and a little bit of real life.
        </p>

        <nav
          className="friendster-header__utility-links"
          aria-label="Utility navigation"
        >
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </nav>
      </div>

      <nav className="friendster-header__navigation" aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#profile" aria-current="page">
          My Profile
        </a>
        <a href="#projects">My Projects</a>
        <a href="#explore">Explore</a>
        <a className="friendster-header__resume" href="#resume">
          View Resume
        </a>
      </nav>
    </header>
  );
}

export default FriendsterHeader;
