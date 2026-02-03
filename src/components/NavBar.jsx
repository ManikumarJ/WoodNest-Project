import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0F2A1D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold ">
          Wood<span className="text-[#9AE6B4]">Nest</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-[#9AE6B4] transition cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#9AE6B4] transition cursor-pointer">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#9AE6B4] transition cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#9AE6B4] transition cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        <button className="hidden md:block border border-[#9AE6B4] text-[#9AE6B4] px-5 py-2 rounded-lg font-semibold hover:bg-[#9AE6B4] hover:text-[#0F2A1D] transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
