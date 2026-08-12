import ProfilePhoto from './ProfilePhoto';
import './TimeSkipScreen.css';

function TimeSkipScreen() {
  return (
    <main className="time-skip" aria-label="Moving from Eirik's 2009 profile to today">
      <div className="time-skip__content">
        <div className="time-skip__photos" aria-hidden="true">
          <ProfilePhoto className="time-skip__photo time-skip__photo--past" period="2009" />
          <ProfilePhoto className="time-skip__photo time-skip__photo--present" period="today" />
        </div>

        <p className="time-skip__years">
          <span>2009</span>
          <span aria-hidden="true">&rarr;</span>
          <span>2026</span>
        </p>
        <p className="time-skip__caption">same person, new corner of the internet</p>
      </div>
    </main>
  );
}

export default TimeSkipScreen;
