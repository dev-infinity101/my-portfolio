import qrCode from '../assets/cat-logo.png'; // Replace with actual QR code image
function Footer() {
  return (
    <footer className="text-secondaryText text-sm font-medium py-4 text-center w-full mt-4 flex flex-col items-center gap-2">
      <img src={qrCode} alt="QR Code" className="w-24 h-24" />
      © {new Date().getFullYear()} @devv. All rights reserved.
    </footer>
  );
}

export default Footer;