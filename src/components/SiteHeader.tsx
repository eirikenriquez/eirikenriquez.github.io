import './SiteHeader.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <a
        className="site-header__wordmark"
        href="#top"
        aria-label="Eirik's portfolio home"
      >
        <span>Eirik Enriquez</span>
      </a>

      <nav className="site-header__navigation" aria-label="Main navigation">
        <a href="#projects">Work</a>
        <span className="site-header__navigation-end">
          <a href="#about">About</a>
          <a href="mailto:eirikdbbd@gmail.com">Contact</a>
        </span>
      </nav>
    </header>
  );
}

export default SiteHeader;
