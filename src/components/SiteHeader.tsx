import './SiteHeader.css';

function SiteHeader() {
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
        <span>eirikster.</span>
      </a>

      <p className="site-header__description">projects and a little real life</p>

      <nav className="site-header__navigation" aria-label="Main navigation">
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default SiteHeader;
