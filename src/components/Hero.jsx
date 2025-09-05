function Hero() {
  return (
   <section className="hero text-center py-24">
  <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md 
                  p-10 rounded-2xl shadow-xl border border-orange-400/30">
    <h1 className="text-5xl font-extrabold text-orange-400 mb-6 drop-shadow-[0_4px_10px_rgba(255,165,0,0.7)]">
      Welcome to Shree Krishna Medical
    </h1>
    <p className="text-gray-100 text-lg leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
      Your trusted medical store for all <span className="text-orange-300 font-semibold">health & wellness</span> needs.  
      We provide genuine medicines, health products, and reliable services.
    </p>
    <a
      href="#products"
      className="inline-block mt-10 px-10 py-4 bg-orange-500/90 text-white font-semibold text-lg 
                 rounded-xl shadow-lg hover:bg-orange-600 transition duration-300 
                 hover:scale-105"
    >
      🛒 Shop Now
    </a>
  </div>
</section>



  );
}

export default Hero;
