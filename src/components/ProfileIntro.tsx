import ProfilePhoto from './ProfilePhoto';
import './ProfileIntro.css';

function ProfileIntro() {
  return (
    <section className="profile-intro" id="profile" aria-labelledby="profile-name">
      <ProfilePhoto className="profile-intro__avatar" period="today" />

      <div className="profile-intro__identity">
        <p className="profile-intro__label">Software developer / Auckland, Aotearoa</p>
        <h1 id="profile-name">Eirik Enriquez</h1>
        <p className="profile-intro__background">
          Born in the Philippines and raised in New Zealand.
        </p>
        <p className="profile-intro__timeline">Online since 2009. Building for the web today.</p>
      </div>

      <div className="profile-intro__current">
        <span>Currently building</span>
        <a href="#projects">The Word per Minute</a>
      </div>
    </section>
  );
}

export default ProfileIntro;
