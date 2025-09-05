import { FaTruckMedical, FaClock, FaCapsules } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="px-6 py-16 text-center">
  <h2 className="text-3xl font-extrabold text-orange-400 mb-12 drop-shadow-[0_3px_8px_rgba(255,165,0,0.7)]">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Service 1 */}
    <div className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-orange-400/30 
                    hover:scale-105 hover:shadow-orange-400/40 transition duration-300">
      <FaTruckMedical className="text-orange-400 text-6xl mx-auto mb-6 drop-shadow-[0_2px_6px_rgba(255,165,0,0.8)]" />
      <h3 className="text-xl font-semibold text-white mb-3">Home Delivery</h3>
      <p className="text-gray-200 leading-relaxed">
        Get your medicines delivered to your doorstep quickly and safely.
      </p>
    </div>

    {/* Service 2 */}
    <div className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-orange-400/30 
                    hover:scale-105 hover:shadow-orange-400/40 transition duration-300">
      <FaClock className="text-orange-400 text-6xl mx-auto mb-6 drop-shadow-[0_2px_6px_rgba(255,165,0,0.8)]" />
      <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
      <p className="text-gray-200 leading-relaxed">
        We are open round the clock to serve you anytime, day or night.
      </p>
    </div>

    {/* Service 3 */}
    <div className="p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-orange-400/30 
                    hover:scale-105 hover:shadow-orange-400/40 transition duration-300">
      <FaCapsules className="text-orange-400 text-6xl mx-auto mb-6 drop-shadow-[0_2px_6px_rgba(255,165,0,0.8)]" />
      <h3 className="text-xl font-semibold text-white mb-3">Wide Range</h3>
      <p className="text-gray-200 leading-relaxed">
        We stock a wide variety of medicines, wellness, and healthcare products.
      </p>
    </div>
  </div>
</section>

  );
}
