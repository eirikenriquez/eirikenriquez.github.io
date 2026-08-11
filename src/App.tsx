import { useEffect, useState } from 'react';
import FriendsterPanel from './components/FriendsterPanel';
import FriendsterHeader from './components/FriendsterHeader';
import ProfileIntro from './components/ProfileIntro';
import ProfileLayout from './components/ProfileLayout';
import XPLoginScreen from './components/XPLoginScreen';
import './App.css';

type ExperienceStage = 'login' | 'opening' | 'profile';

const profileTransitionDuration = 700;

function App() {
  const [stage, setStage] = useState<ExperienceStage>('login');

  useEffect(() => {
    if (stage !== 'opening') {
      return;
    }

    const transitionTimer = window.setTimeout(() => {
      setStage('profile');
    }, profileTransitionDuration);

    return () => window.clearTimeout(transitionTimer);
  }, [stage]);

  function handleViewProfile() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    setStage(prefersReducedMotion ? 'profile' : 'opening');
  }

  if (stage !== 'profile') {
    return (
      <XPLoginScreen
        isOpening={stage === 'opening'}
        onViewProfile={handleViewProfile}
      />
    );
  }

  return (
    <main id="top" className="app app--entering">
      <div className="portfolio-page">
        <FriendsterHeader />
        <ProfileIntro />
        <ProfileLayout
          sidebar={<FriendsterPanel title="Eirik's details" />}
        >
          <FriendsterPanel id="projects" title="Eirik's featured projects" />
        </ProfileLayout>
      </div>
    </main>
  );
}

export default App;
