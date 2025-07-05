import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, IndianRupee, ArrowLeft } from "lucide-react";

const ViewDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pkg = location.state?.pkg;

  if (!pkg) {
    return (
      <div className="text-center text-red-600 py-20 mt-24">
        <h2 className="text-2xl font-bold">No Package Data Received</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-yellow-700 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50  px-4 pt-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-800 mb-4 hover:underline"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Packages
        </button>

        <h1 className="text-3xl font-bold text-yellow-700 mb-4">{pkg.name}</h1>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <MapPin size={18} className="text-yellow-600" /> {pkg.location}
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <CalendarDays size={18} className="text-yellow-600" /> {pkg.duration}
        </div>
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <IndianRupee size={18} className="text-yellow-600" /> ₹{pkg.price}
        </div>

        <p className="text-gray-800 leading-relaxed">
          {pkg.description ||
            "This is a detailed spiritual and cultural journey."}
        </p>

        <button
          onClick={() => navigate("/pages/book-now", { state: { pkg } })}
          className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
