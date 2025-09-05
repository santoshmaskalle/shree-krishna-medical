import banner from "../Images/image.jpg";

function Contact() {
  return (
    <section className="py-16 bg-transparent" id="contact">
  <div className="container mx-auto px-6 text-center">
    
    {/* ✅ Banner Image */}
    <div className="flex justify-center mb-10">
      {/* <img
        src={banner}
        alt="Shree Krishna Medical Banner"
        className="w-full max-w-4xl h-64 object-cover rounded-2xl shadow-lg border border-orange-400/40"
      /> */}
    </div>

    {/* ✅ Contact Card */}
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-orange-400/30">
      <h2 className="text-3xl font-extrabold text-orange-400 mb-4 drop-shadow-[0_3px_8px_rgba(255,165,0,0.7)]">
        Shree Krishna Medical
      </h2>

      <p className="text-gray-200 text-lg leading-relaxed">
        #23, Shop No 2, Ground Floor, Sompura Village, <br />
        Sarjapura Main Road, Bangalore – 562125
      </p>

      <p className="mt-6 text-xl font-semibold text-white drop-shadow-md">
        📞 Contact:{" "}
        <span className="text-orange-300 font-bold">8197272739</span>
      </p>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/918197272739"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 px-8 py-3 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-lg 
                   hover:bg-orange-600 hover:shadow-orange-400/40 transition duration-300"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  </div>
</section>

  );
}

export default Contact;
