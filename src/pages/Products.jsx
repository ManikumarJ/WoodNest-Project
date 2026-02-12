// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import useFetchData from "../hooks/useFetchData";

// const Products = () => {
//   const { data } = useFetchData("/Products.json");
//   const { addToCart } = useContext(CartContext);

//   const products = data?.products || [];

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] py-12 px-6">
//       <h1 className="text-4xl font-bold text-center text-[#0F2A1D] mb-12">
//         Our Premium Collection
//       </h1>

//       <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white rounded-2xl shadow-md flex flex-col w-72">
//             <div className="h-56 overflow-hidden">
//               <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
//             </div>

//             <div className="p-5 flex flex-col flex-grow">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p>₹{product.price}</p>

//               <button onClick={() => addToCart(product)} className="mt-auto bg-[#0F2A1D] text-white py-2 rounded-lg" >
//                 Add to Cart
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import useFetchData from "../hooks/useFetchData";
import { toast } from "react-toastify";
import { FaStar, FaRegStar } from "react-icons/fa";


const Products = () => {
  const { data } = useFetchData("/Products.json");
  const { addToCart } = useContext(CartContext);

  const products = data?.products || [];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#0F2A1D] mb-12">
        Our Premium Collection
      </h1>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div  key={product.id} className="bg-white rounded-2xl shadow-md flex flex-col w-72" >
            <div className="h-56 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mb-3 font-semibold text-[#064232]">
                ₹{product.price}
              </p>
              <div className="flex text-yellow-500 mb-2">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= product.rating ? (
                    <FaStar key={star} />
                  ) : (
                    <FaRegStar key={star} />
                  )
                )}
              </div>


              <button onClick={() => {
                  addToCart(product);
                  toast.success("Product added to cart");
                }}
                className="mt-auto bg-[#0F2A1D] text-white py-2 rounded-lg" >
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
