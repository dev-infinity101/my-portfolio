import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Github, url: 'https://github.com/dev-infinity101', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/prab101/', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://twitter.com/', label: 'Twitter' },
];

function SocialIcons() {
  return (
    <div className="flex gap-6 mt-4">
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryText hover:text-secondaryText transition-colors duration-300 ease-in-out"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;