import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#0F2A1D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
         Wood<span className="text-[#9AE6B4]">nest</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Link to="/login" className="hidden md:block border border-[#9AE6B4] text-[#9AE6B4] px-5 py-2 rounded-lg font-semibold hover:bg-[#9AE6B4] hover:text-[#0F2A1D] transition" >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
