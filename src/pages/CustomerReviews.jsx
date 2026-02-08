import React from "react";
import useFetchData from "../hooks/useFetchData";

const CustomerReviews = () => {
  const { data } = useFetchData("/CustomerReview.json");

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F2A1D] mb-10">
        Customer Reviews
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {data &&
          data.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex flex-col md:flex-row gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#064232] flex items-center justify-center text-white font-bold text-xl">
                  {review.name[0].toUpperCase()}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#0F2A1D]">
                    {review.name}
                  </h3>
                  <span className="text-yellow-500 font-semibold">
                    {"⭐".repeat(review.rating)}
                  </span>
                </div>

                <p className="text-gray-700 mb-2">{review.comment}</p>

                <span className="text-gray-400 text-sm">{review.date}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
