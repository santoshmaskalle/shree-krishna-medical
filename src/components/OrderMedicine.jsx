import { useState } from "react";

export default function OrderMedicine() {
  const [medicine, setMedicine] = useState("");

  // Replace with your WhatsApp number (with country code, no +)
  const phoneNumber = "8197272739";

  const handleOrder = () => {
    if (medicine.trim() === "") {
      alert("Please enter the tablet name!");
      return;
    }
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "I would like to order: " + medicine
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="px-6 py-16 bg-transparent" id="order">
  <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-orange-400/30">
    
    {/* Title */}
    <h2 className="text-3xl font-extrabold text-orange-400 mb-6 drop-shadow-[0_3px_8px_rgba(255,165,0,0.7)]">
      Order Medicine Online
    </h2>
    
    {/* Subtitle */}
    <p className="text-gray-200 mb-10 leading-relaxed">
      Enter the medicine name and send it directly to our WhatsApp.  
      We’ll confirm your order quickly ✅
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Enter tablet / medicine name"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-orange-300 bg-white/20 text-white placeholder-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner"
      />
      <button
        onClick={handleOrder}
        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg 
                   hover:bg-orange-600 hover:shadow-orange-400/40 transition duration-300"
      >
        📲 Send to WhatsApp
      </button>
    </div>
  </div>
</section>

  );
}
