import { useEffect, useState } from 'react';
import ProfileDetails from './components/ProfileDetails';
import ProfileIntro from './components/ProfileIntro';
import ProfileLayout from './components/ProfileLayout';
import ProjectsSection from './components/ProjectsSection';
import SiteHeader from './components/SiteHeader';
import TimeSkipScreen from './components/TimeSkipScreen';
import XPLoginScreen from './components/XPLoginScreen';
import './App.css';

type ExperienceStage = 'login' | 'opening' | 'timeSkip' | 'profile';

const introSessionKey = 'portfolio-intro-viewed';
const profileTransitionDuration = 700;
const timeSkipDuration = 1400;

function getInitialStage(): ExperienceStage {
  const hasViewedIntro = window.sessionStorage.getItem(introSessionKey) === 'true';

  return hasViewedIntro ? 'profile' : 'login';
}

function App() {
  const [stage, setStage] = useState<ExperienceStage>(getInitialStage);

  useEffect(() => {
    if (stage === 'opening') {
      const openingTimer = window.setTimeout(() => {
        setStage('timeSkip');
      }, profileTransitionDuration);

      return () => window.clearTimeout(openingTimer);
    }

    if (stage !== 'timeSkip') {
      return;
    }

    const timeSkipTimer = window.setTimeout(() => {
      setStage('profile');
    }, timeSkipDuration);

    return () => window.clearTimeout(timeSkipTimer);
  }, [stage]);

  function handleViewProfile() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.sessionStorage.setItem(introSessionKey, 'true');
    setStage(prefersReducedMotion ? 'profile' : 'opening');
  }

  function handleReplayIntro() {
    window.sessionStorage.removeItem(introSessionKey);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setStage('login');
  }

  if (stage === 'login' || stage === 'opening') {
    return (
      <XPLoginScreen
        isOpening={stage === 'opening'}
        onViewProfile={handleViewProfile}
      />
    );
  }

  if (stage === 'timeSkip') {
    return <TimeSkipScreen />;
  }

  return (
    <main id="top" className="app app--entering">
      <div className="portfolio-page">
        <SiteHeader onReplayIntro={handleReplayIntro} />
        <ProfileIntro />
        <ProfileLayout sidebar={<ProfileDetails />}>
          <ProjectsSection />
        </ProfileLayout>
      </div>
    </main>
  );
}

export default App;
