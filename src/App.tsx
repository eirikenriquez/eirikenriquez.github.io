import { useState } from 'react';
import BrowserShell from './components/BrowserShell';
import FriendsterPanel from './components/FriendsterPanel';
import FriendsterHeader from './components/FriendsterHeader';
import ProfileIntro from './components/ProfileIntro';
import ProfileLayout from './components/ProfileLayout';
import XPLoginScreen from './components/XPLoginScreen';

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  if (!isProfileOpen) {
    return <XPLoginScreen onViewProfile={() => setIsProfileOpen(true)} />;
  }

  return (
    <main id="top" className="app">
      <BrowserShell>
        <FriendsterHeader />
        <ProfileIntro />
        <ProfileLayout
          sidebar={<FriendsterPanel title="Eirik's details" />}
        >
          <FriendsterPanel id="projects" title="Eirik's featured projects" />
        </ProfileLayout>
      </BrowserShell>
    </main>
  );
}

export default App;
