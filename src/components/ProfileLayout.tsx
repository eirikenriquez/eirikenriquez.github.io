import type { ReactNode } from 'react';
import './ProfileLayout.css';

type ProfileLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

function ProfileLayout({ children, sidebar }: ProfileLayoutProps) {
  return (
    <section className="profile-layout" aria-label="Profile content">
      <aside className="profile-layout__sidebar">{sidebar}</aside>
      <div className="profile-layout__main">{children}</div>
    </section>
  );
}

export default ProfileLayout;
