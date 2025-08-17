import VisitorCounter from './VisitorCounter';
import catLogo from '../assets/catz.png'; // Import the cat logo

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-6 border-none shadow-none">  {/* Made containing div not visibly rendered */}
        <VisitorCounter />  {/* Assuming this renders timestamp and visitor count in the desired order */}
        <img src={catLogo} alt="Logo" className="mx-auto h-24 w-auto " />
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prabodh.dev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;