// import SofaImage from "../assets/images/sofa.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-10">

        <div className="flex-1">
          <img src="/images/sofa.jpg" alt="Luxury Sofa" className="w-full h-auto rounded-xl shadow-lg"/>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A1D]">
            Woodnest – Luxury Furniture for Your Home
          </h2>

          <p className="text-gray-700 text-lg md:text-xl">
            Discover premium crafted furniture that blends style and comfort.
            Transform your home into a modern sanctuary with Furnisia.
          </p>

          <button className="w-40 bg-[#064232] text-white px-6 py-3 border border-black rounded-lg font-semibold hover:bg-[#9AE6B4] hover:text-[#0F2A1D] transition">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
