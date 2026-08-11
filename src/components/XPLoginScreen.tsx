import type { FormEvent } from 'react';
import './XPLoginScreen.css';

type XPLoginScreenProps = {
  onViewProfile: () => void;
};

function XPLoginScreen({ onViewProfile }: XPLoginScreenProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onViewProfile();
  }

  return (
    <main className="xp-login-screen">
      <section className="xp-window" aria-labelledby="xp-window-title">
        <header className="xp-window__title-bar">
          <div className="xp-window__title">
            <span className="xp-window__icon" aria-hidden="true">
              e
            </span>
            <span id="xp-window-title">eirikster - Sign In</span>
          </div>

          <div className="xp-window__controls" aria-hidden="true">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </header>

        <div className="xp-window__content">
          <div className="xp-login__welcome">
            <p className="xp-login__wordmark">eirikster.</p>
            <p className="xp-login__tagline">a personal corner of the internet</p>

            <div className="xp-login__profile-preview">
              <div className="xp-login__avatar" aria-hidden="true">
                EE
              </div>
              <div>
                <strong>Eirik Enriquez</strong>
                <span>Software developer in Auckland</span>
                <span>Last active: right now</span>
              </div>
            </div>
          </div>

          <form className="xp-login__form" onSubmit={handleSubmit}>
            <div>
              <p className="xp-login__heading">Welcome, visitor</p>
              <p className="xp-login__copy">
                Sign in as a guest to view Eirik&apos;s profile.
              </p>
            </div>

            <label className="xp-login__field">
              <span>Email address</span>
              <input
                name="email"
                type="email"
                value="visitor@eirikster.com"
                readOnly
              />
            </label>

            <label className="xp-login__field">
              <span>Password</span>
              <input name="password" type="password" value="portfolio" readOnly />
            </label>

            <label className="xp-login__remember">
              <input type="checkbox" defaultChecked />
              <span>Remember me on this computer</span>
            </label>

            <button className="xp-login__button" type="submit">
              View Eirik&apos;s profile
            </button>

            <p className="xp-login__note">No account or real password needed.</p>
          </form>
        </div>

        <footer className="xp-window__status">
          <span className="xp-window__status-light" aria-hidden="true" />
          Connected to eirikster
        </footer>
      </section>
    </main>
  );
}

export default XPLoginScreen;
