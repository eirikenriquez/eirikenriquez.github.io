import { ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

const currentYear = new Date().getFullYear();

function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <header className="contact-section__heading">
        <p>Contact</p>
        <p>Auckland, Aotearoa</p>
      </header>

      <div className="contact-section__invitation">
        <h2 id="contact-title">Let&apos;s talk.</h2>
        <a href="mailto:eirikdbbd@gmail.com">
          eirikdbbd@gmail.com
          <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
        </a>
      </div>

      <footer className="contact-section__footer">
        <p>© {currentYear} Eirik Enriquez</p>
        <nav aria-label="Social links">
          <a href="https://github.com/eirikenriquez">
            GitHub
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/eirik-mykel-navarro-enriquez/">
            LinkedIn
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.5} />
          </a>
        </nav>
      </footer>
    </section>
  );
}

export default ContactSection;
