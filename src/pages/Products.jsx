import useFetchData from "../hooks/useFetchData";

const Products = () => {
  const { data } = useFetchData("/Products.json");

  const products = data?.products || [];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#0F2A1D] mb-12">
        Our Premium Collection
      </h1>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col w-72">
            <div className="h-56 overflow-hidden">
              <img src={product.image} alt={product.name}  className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[#0F2A1D] mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-yellow-500 text-sm mb-2"> {product.rating}</p>
              <p className="text-xl font-bold text-[#064232] mb-3">₹{product.price}</p>
          
              <button className="mt-auto bg-[#0F2A1D] text-white py-2 rounded-lg hover:bg-[#9AE6B4] hover:text-[#0F2A1D] transition duration-300 font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
