const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 sm:p-10">
      <div className="nav-left">
        <div className="nav-logo">
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-sm">CG,India</p>
        </div>
      </div>

      <div className="flex items-center">
        <ul className="hidden sm:flex space-x-6">
          <li className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Services
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Work
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition-colors">
            Contact
          </li>
        </ul>
        <div className="ml-6 sm:ml-24">
          <p className="border border-white rounded-full px-4 py-2 text-sm cursor-pointer hover:text-gray-300 transition-colors">
            FreeCallBookingAvailable
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
