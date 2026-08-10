import BrowserShell from './components/BrowserShell';
import FriendsterHeader from './components/FriendsterHeader';

function App() {
  return (
    <main id="top" className="app">
      <BrowserShell>
        <FriendsterHeader />
      </BrowserShell>
    </main>
  );
}

export default App;
