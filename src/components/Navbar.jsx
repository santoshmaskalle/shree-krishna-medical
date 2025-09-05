function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                bg-gradient-to-r from-orange-500/90 to-red-500/90 
                backdrop-blur-md shadow-lg px-8 py-4 
                flex justify-between items-center">
  {/* Brand */}
  <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
    Shree Krishna Medical
  </h1>

  {/* Links */}
  <ul className="flex space-x-8 text-lg font-semibold text-white">
    <li>
      <a href="#" className="hover:text-yellow-300 transition duration-300">
        Home
      </a>
    </li>
    <li>
      <a href="#services" className="hover:text-yellow-300 transition duration-300">
        Services
      </a>
    </li>
    <li>
      <a href="#products" className="hover:text-yellow-300 transition duration-300">
        Products
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-yellow-300 transition duration-300">
        Contact
      </a>
    </li>
  </ul>
</nav>



  );
}

export default Navbar;
