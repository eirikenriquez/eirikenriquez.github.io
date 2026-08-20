import { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProfileIntro from './components/ProfileIntro';
import ProjectsSection from './components/ProjectsSection';
import SectionEntrance from './components/SectionEntrance';
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
        <SectionEntrance>
          <ProfileIntro />
        </SectionEntrance>
        <SectionEntrance>
          <ProjectsSection />
        </SectionEntrance>
        <SectionEntrance>
          <AboutSection />
        </SectionEntrance>
        <SectionEntrance>
          <ContactSection />
        </SectionEntrance>
      </div>
    </main>
  );
}

export default App;
