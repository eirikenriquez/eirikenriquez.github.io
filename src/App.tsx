import BrowserShell from './components/BrowserShell';
import FriendsterPanel from './components/FriendsterPanel';
import FriendsterHeader from './components/FriendsterHeader';
import ProfileIntro from './components/ProfileIntro';
import ProfileLayout from './components/ProfileLayout';

function App() {
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
