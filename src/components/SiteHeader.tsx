import './SiteHeader.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <h1 className="site-header__wordmark">
        <a href="#top" aria-label="Eirik's portfolio home">
          Eirik Enriquez
        </a>
      </h1>

      <nav className="site-header__navigation" aria-label="Main navigation">
        <a href="#projects">Work</a>
        <span className="site-header__navigation-end">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </span>
      </nav>
    </header>
  );
}

export default SiteHeader;
