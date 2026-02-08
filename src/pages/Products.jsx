import useFetchData from "../hooks/useFetchData";

const Products = () => {
  const { data } = useFetchData("/products.json");

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {data &&
          data.map((product) => (
            <div key={product.id} className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col" >
              <div className="h-52 overflow-hidden">
                <img src={product.image}  loading="lazy" alt={product.name} className="w-full h-full object-cover hover:scale-105 transition duration-300"/>
              </div>


              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mb-1">
                  Category: {product.category}
                </p>

                <p className="text-xl font-bold text-green-600 mb-4">
                  ₹{product.price}
                </p>

                <button className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
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
