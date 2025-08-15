import { CheckCircle } from 'lucide-react';
import profilePic from '../assets/dev-smile.svg'; // real pfp

function ProfileSection() {
  return (
    <section className="flex flex-col items-center text-center gap-2">
      <img
        src={profilePic}
        alt="Profile of "
        loading="lazy"
        className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto object-cover border-4 border-white shadow-soft"
      />
      <h1 className="text-xl font-bold flex items-center gap-1.5 mt-4">
        Dev Upadhyay <CheckCircle size={18} className="text-blue-500" aria-label="Verified" />
      </h1>
      <p className="text-secondaryText text-sm text-balance">
        Modern Minimalist Animated Portfolio
      </p>
    </section>
  );
}

export default ProfileSection;