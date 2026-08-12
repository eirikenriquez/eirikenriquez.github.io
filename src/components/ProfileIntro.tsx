import ProfilePhoto from './ProfilePhoto';
import './ProfileIntro.css';

function ProfileIntro() {
  return (
    <section className="profile-intro" id="profile" aria-labelledby="profile-name">
      <ProfilePhoto className="profile-intro__avatar" period="today" />

      <div className="profile-intro__identity">
        <p className="profile-intro__label">profile / Auckland, Aotearoa</p>
        <h1 id="profile-name">Eirik Enriquez</h1>
        <p className="profile-intro__role">Software developer.</p>
        <p className="profile-intro__background">
          Born in the Philippines and raised in New Zealand.
        </p>

        <div className="profile-intro__actions">
          <a className="profile-intro__projects" href="#projects">
            View projects <span aria-hidden="true">&rarr;</span>
          </a>

          <p className="profile-intro__status">
            <span aria-hidden="true" />
            currently building The Word per Minute
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileIntro;
