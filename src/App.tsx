import BrowserShell from './components/BrowserShell';
import FriendsterHeader from './components/FriendsterHeader';
import ProfileIntro from './components/ProfileIntro';

function App() {
  return (
    <main id="top" className="app">
      <BrowserShell>
        <FriendsterHeader />
        <ProfileIntro />
      </BrowserShell>
    </main>
  );
}

export default App;
