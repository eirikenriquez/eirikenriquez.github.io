import { ArrowDown } from 'lucide-react';
import './ProfileIntro.css';

function ProfileIntro() {
  return (
    <section className="profile-intro" id="profile" aria-labelledby="profile-heading">
      <div className="profile-intro__main">
        <h1 id="profile-heading">Eirik Enriquez</h1>
        <p className="profile-intro__summary">
          Software developer based in Auckland, Aotearoa.
        </p>

        <a className="profile-intro__work-link" href="#projects">
          Selected work
          <ArrowDown aria-hidden="true" size={16} strokeWidth={1.75} />
        </a>
      </div>

      <div className="profile-intro__current">
        <span>Currently</span>
        <strong>The Word per Minute</strong>
        <p>Scripture-first typing practice, now in public alpha.</p>
      </div>
    </section>
  );
}

export default ProfileIntro;
