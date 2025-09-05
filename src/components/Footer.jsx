import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="py-10 bg-white/10 backdrop-blur-md border-t border-orange-400/30 text-white mt-12 shadow-lg">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">

    {/* Copyright */}
    <p className="text-sm text-gray-200 drop-shadow-md mb-4 md:mb-0">
      &copy; {new Date().getFullYear()} 
      <span className="text-orange-400 font-semibold"> Shree Krishna Medical</span>. 
      All Rights Reserved.
    </p>

    {/* Social Media Icons */}
    <div className="flex gap-6 text-xl">
      <a href="https://wa.me/918197272739" target="_blank" rel="noopener noreferrer"
        className="hover:text-green-400 transition drop-shadow-md">
        <FaWhatsapp />
      </a>
      <a href="mailto:shreekrishnamedical@gmail.com"
        className="hover:text-red-400 transition drop-shadow-md">
        <FaEnvelope />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
        className="hover:text-blue-400 transition drop-shadow-md">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
        className="hover:text-pink-400 transition drop-shadow-md">
        <FaInstagram />
      </a>
    </div>
  </div>
</footer>
  );
}
