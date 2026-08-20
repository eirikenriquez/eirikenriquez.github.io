import childhoodPhoto from '../assets/eirik-childhood.jpg';
import ProfilePhoto from './ProfilePhoto';
import './XPLoginScreen.css';

type XPLoginScreenProps = {
  isOpening: boolean;
  onViewProfile: () => void;
};

function XPLoginScreen({ isOpening, onViewProfile }: XPLoginScreenProps) {
  return (
    <main
      className={`xp-login-screen${isOpening ? ' xp-login-screen--opening' : ''}`}
      aria-busy={isOpening}
    >
      <section className="xp-window" aria-labelledby="xp-window-title">
        <header className="xp-window__title-bar">
          <div className="xp-window__title">
            <span className="xp-window__icon" aria-hidden="true">
              e
            </span>
            <span id="xp-window-title">Eirik Enriquez - Portfolio</span>
          </div>

          <div className="xp-window__controls" aria-hidden="true">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </header>

        <div className="xp-window__content">
          <section className="xp-launcher__profile" aria-label="Portfolio owner">
            <ProfilePhoto
              className="xp-launcher__portrait"
              src={childhoodPhoto}
              alt="Eirik as a child"
            />
            <div>
              <p className="xp-launcher__name">Eirik Enriquez</p>
              <p className="xp-launcher__role">Software developer</p>
              <p className="xp-launcher__location">Auckland, New Zealand</p>
            </div>
          </section>

          <section className="xp-launcher__action">
            <div>
              <p className="xp-launcher__heading">Welcome</p>
              <p className="xp-launcher__copy">
                Open Eirik&apos;s portfolio to view selected work and a little about
                him.
              </p>
            </div>

            <button
              className="xp-launcher__button"
              type="button"
              disabled={isOpening}
              onClick={onViewProfile}
            >
              {isOpening ? 'Opening portfolio...' : 'Open portfolio'}
            </button>

            <div className="xp-launcher__progress" aria-hidden="true">
              <span />
            </div>

            <p className="xp-launcher__status" role="status" aria-live="polite">
              {isOpening ? 'Opening portfolio' : 'Ready to open'}
            </p>
          </section>
        </div>

        <footer className="xp-window__status">
          <span className="xp-window__status-light" aria-hidden="true" />
          Portfolio ready
        </footer>
      </section>
    </main>
  );
}

export default XPLoginScreen;
