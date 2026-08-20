import './ProfilePhoto.css';

type ProfilePhotoProps = {
  alt: string;
  className?: string;
  src: string;
};

function ProfilePhoto({ alt, className, src }: ProfilePhotoProps) {
  const classNames = ['profile-photo', className].filter(Boolean).join(' ');

  return <img className={classNames} src={src} alt={alt} />;
}

export default ProfilePhoto;
