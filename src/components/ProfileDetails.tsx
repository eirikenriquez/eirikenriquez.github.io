import './ProfileDetails.css';

const interests = ['faith', 'fitness', 'video games', 'watching sports'];

function ProfileDetails() {
  return (
    <section
      className="profile-details"
      id="about"
      aria-labelledby="profile-details-title"
    >
      <header className="profile-details__header">
        <h2 id="profile-details-title">Eirik&apos;s details</h2>
        <p>Profile</p>
      </header>

      <dl className="profile-details__facts">
        <div>
          <dt>Based in</dt>
          <dd>Auckland, Aotearoa</dd>
        </div>

        <div>
          <dt>Education</dt>
          <dd>Master of Computer and Information Science at AUT</dd>
        </div>

        <div>
          <dt>Outside code</dt>
          <dd>{interests.join(', ')}</dd>
        </div>

        <div>
          <dt>Elsewhere</dt>
          <dd className="profile-details__links">
            <a href="https://github.com/eirikenriquez">GitHub</a>
            <a href="https://www.linkedin.com/in/eirik-mykel-navarro-enriquez/">
              LinkedIn
            </a>
            <a href="mailto:eirikdbbd@gmail.com">Email</a>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default ProfileDetails;
