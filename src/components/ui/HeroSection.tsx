import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative bg-blue-900 text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/XvRRqM8Y/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDI0-LTAz-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV80-Ml9wa-G90b19v-Zl9zc-G9yd-F9vcm-Fu-Z2-Vf.webp')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Drive Clean, Shine Bright
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience a premium car wash that leaves your vehicle looking
          spotless, inside and out.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
          <Link to="/service">Book Your Wash Now</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
