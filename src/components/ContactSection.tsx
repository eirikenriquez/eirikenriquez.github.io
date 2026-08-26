import './ContactSection.css';

const currentYear = new Date().getFullYear();

function ContactSection() {
  return (
    <footer
      className="contact-section"
      id="contact"
    >
      <div className="contact-section__links">
        <p className="contact-section__name">Eirik Enriquez</p>
        <nav aria-label="Contact links">
          <a href="mailto:eirikdbbd@gmail.com">Email</a>
          <a href="https://github.com/eirikenriquez">GitHub</a>
          <a href="https://www.linkedin.com/in/eirik-mykel-navarro-enriquez/">
            LinkedIn
          </a>
        </nav>
      </div>

      <p className="contact-section__copyright">© {currentYear}</p>
    </footer>
  );
}

export default ContactSection;
