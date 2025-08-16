import { CheckCircle } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../App'; // Adjust path if necessary
import profilePicBlack from '../assets/dev-smile.svg';
import profilePicWhite from '../assets/devv2.jpeg';

function ProfileSection() {
  const { theme } = useContext(ThemeContext);
  const profilePic = theme === 'dark' ? profilePicWhite : profilePicBlack;

  return (
    <section className="flex flex-col items-center text-center gap-2">
      <img
        src={profilePic}
        alt="Profile of Dev Upadhyay"
        loading="lazy"
        className="w-34 h-32 md:w-36 md:h-36 rounded-full mx-auto object-cover border-4 border-white shadow-soft"
      />
      <h1 className="text-xl font-bold flex items-center gap-1.5 mt-4">
        Dev Upadhyay <CheckCircle size={18} className="text-blue-500" aria-label="Verified" />
      </h1>
      <p className="text-secondaryText text-sm text-balance">
         GenAI / FullStack • DSA
      </p>
    </section>
  );
}

export default ProfileSection;