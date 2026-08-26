import profilePhoto from '../assets/eirik-enriquez.jpg';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <header className="about-section__heading">
        <h2 id="about-title">About</h2>
      </header>

      <div className="about-section__content">
        <figure className="about-section__portrait">
          <img
            src={profilePhoto}
            alt="Eirik Enriquez standing in a library"
            loading="lazy"
          />
          <figcaption>Auckland, Aotearoa</figcaption>
        </figure>

        <div className="about-section__copy">
          <p className="about-section__introduction">
            I&apos;m Eirik. Welcome to my page, where I share a few projects
            I&apos;m proud of.
          </p>

          <div className="about-section__notes">
            <p>
              <span>Education</span>
              Master of Computer and Information Science, Auckland University
              of Technology
            </p>
            <p>
              <span>Outside code</span>
              Faith / Fitness / Video games / Watching sports
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
