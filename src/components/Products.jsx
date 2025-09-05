export default function Products() {
  const products = [
    { id: 1, name: "Paracetamol 500mg", price: "₹20", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Vitamin C Tablets", price: "₹120", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Hand Sanitizer 100ml", price: "₹50", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Blood Pressure Monitor", price: "₹1200", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-12 bg-transparent px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 shadow-md rounded-xl p-4 text-center hover:shadow-xl transition">
              <img src={product.image} alt={product.name} className="mx-auto mb-4 rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-2">{product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
