import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F2A1D]">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">

        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 text-sm text-gray-600 hover:text-black">
         Back
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input type="text" placeholder="Full Name" className="w-full border p-3 mb-4 rounded"/>

        <input type="email" placeholder="Email" className="w-full border p-3 mb-4 rounded"/>

        <input type="password" placeholder="Password" className="w-full border p-3 mb-4 rounded"/>

        <button className="w-full bg-[#0F2A1D] text-white py-3 rounded mb-4">
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/login" className="text-[#064232] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
