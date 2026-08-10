import type { ReactNode } from 'react';
import './BrowserShell.css';

type BrowserShellProps = {
  children?: ReactNode;
};

function BrowserShell({ children }: BrowserShellProps) {
  return (
    <section className="browser-shell" aria-label="Portfolio browser window">
      <div className="browser-shell__tab-bar">
        <div className="browser-shell__window-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-shell__tab">Eirik Enriquez - Profile</div>
      </div>

      <div className="browser-shell__toolbar">
        <div className="browser-shell__navigation" aria-hidden="true">
          <span>&larr;</span>
          <span>&rarr;</span>
          <span>&#8635;</span>
        </div>

        <div className="browser-shell__address" aria-label="Current address">
          <span aria-hidden="true">&#9679;</span>
          <span>eirik.online/profile</span>
        </div>

        <span className="browser-shell__visitor">visitor #001337</span>
      </div>

      <div className="browser-shell__viewport">{children}</div>
    </section>
  );
}

export default BrowserShell;
