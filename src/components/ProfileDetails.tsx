import {
  Code2,
  Contact,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import './ProfileDetails.css';

const interests = ['faith', 'fitness', 'video games', 'watching sports'];

function ProfileDetails() {
  return (
    <section className="profile-details" aria-labelledby="profile-details-title">
      <header className="profile-details__header">
        <p>Profile</p>
        <h2 id="profile-details-title">Eirik&apos;s details</h2>
      </header>

      <dl className="profile-details__facts">
        <div>
          <dt>
            <MapPin aria-hidden="true" size={17} />
            Based in
          </dt>
          <dd>Auckland, Aotearoa</dd>
        </div>

        <div>
          <dt>
            <GraduationCap aria-hidden="true" size={17} />
            Studying
          </dt>
          <dd>Master of Computer and Information Science at AUT</dd>
        </div>
      </dl>

      <div className="profile-details__section">
        <h3>Interests</h3>
        <ul className="profile-details__interests">
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>

      <div className="profile-details__section">
        <h3>Elsewhere</h3>
        <ul className="profile-details__links">
          <li>
            <a href="https://github.com/eirikenriquez">
              <Code2 aria-hidden="true" size={17} />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eirik-mykel-navarro-enriquez/">
              <Contact aria-hidden="true" size={17} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:eirikdbbd@gmail.com">
              <Mail aria-hidden="true" size={17} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProfileDetails;
