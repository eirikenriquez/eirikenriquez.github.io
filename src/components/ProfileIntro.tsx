import './ProfileIntro.css';

function ProfileIntro() {
  return (
    <section className="profile-intro" id="profile" aria-labelledby="profile-name">
      <div className="profile-intro__avatar" aria-label="Profile photo placeholder">
        EE
      </div>

      <div className="profile-intro__identity">
        <h1 id="profile-name">Eirik Enriquez</h1>
        <p className="profile-intro__role">
          Software developer in Auckland, Aotearoa
        </p>
        <p className="profile-intro__background">
          Born in the Philippines and raised in New Zealand.
        </p>
      </div>

      <p className="profile-intro__status">
        Currently building The Word per Minute
      </p>
    </section>
  );
}

export default ProfileIntro;
