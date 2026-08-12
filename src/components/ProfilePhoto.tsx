import './ProfilePhoto.css';

type ProfilePhotoProps = {
  className?: string;
  period: '2009' | 'today';
};

function ProfilePhoto({ className, period }: ProfilePhotoProps) {
  const classNames = ['profile-photo', className].filter(Boolean).join(' ');
  const description = period === '2009' ? 'Eirik in 2009' : 'Eirik today';

  return (
    <div className={classNames} role="img" aria-label={`${description} placeholder`}>
      <span className="profile-photo__initials" aria-hidden="true">
        EE
      </span>
      <span className="profile-photo__period" aria-hidden="true">
        {period}
      </span>
    </div>
  );
}

export default ProfilePhoto;
