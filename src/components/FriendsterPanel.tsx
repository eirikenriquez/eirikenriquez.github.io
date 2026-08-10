import type { ReactNode } from 'react';
import './FriendsterPanel.css';

type FriendsterPanelProps = {
  children?: ReactNode;
  id?: string;
  title: string;
};

function FriendsterPanel({ children, id, title }: FriendsterPanelProps) {
  return (
    <section className="friendster-panel" id={id}>
      <h2 className="friendster-panel__title">{title}</h2>
      {children && <div className="friendster-panel__body">{children}</div>}
    </section>
  );
}

export default FriendsterPanel;
