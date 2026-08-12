import { useEffect, useState } from 'react';
import ProfileDetails from './components/ProfileDetails';
import ProfileIntro from './components/ProfileIntro';
import ProfileLayout from './components/ProfileLayout';
import ProjectsSection from './components/ProjectsSection';
import SiteHeader from './components/SiteHeader';
import XPLoginScreen from './components/XPLoginScreen';
import './App.css';

type ExperienceStage = 'login' | 'opening' | 'profile';

const introSessionKey = 'portfolio-intro-viewed';
const profileTransitionDuration = 700;

function getInitialStage(): ExperienceStage {
  const hasViewedIntro = window.sessionStorage.getItem(introSessionKey) === 'true';

  return hasViewedIntro ? 'profile' : 'login';
}

function App() {
  const [stage, setStage] = useState<ExperienceStage>(getInitialStage);

  useEffect(() => {
    if (stage !== 'opening') {
      return;
    }

    const openingTimer = window.setTimeout(() => {
      setStage('profile');
    }, profileTransitionDuration);

    return () => window.clearTimeout(openingTimer);
  }, [stage]);

  function handleViewProfile() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.sessionStorage.setItem(introSessionKey, 'true');
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
        <SiteHeader />
        <ProfileIntro />
        <ProfileLayout sidebar={<ProfileDetails />}>
          <ProjectsSection />
        </ProfileLayout>
      </div>
    </main>
  );
}

export default App;
