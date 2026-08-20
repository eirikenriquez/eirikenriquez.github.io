import { ArrowDown } from 'lucide-react';
import './ProfileIntro.css';

function ProfileIntro() {
  return (
    <section className="profile-intro" id="profile" aria-label="Introduction">
      <p>Software developer based in Auckland, Aotearoa.</p>
      <a className="profile-intro__work-link" href="#projects">
        Selected work
        <ArrowDown aria-hidden="true" size={16} strokeWidth={1.75} />
      </a>
    </section>
  );
}

export default ProfileIntro;
