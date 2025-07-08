import React from "react";
import { Link } from "react-router-dom";
import { MapPin, CalendarDays, IndianRupee, Star } from "lucide-react";

const TourPackageCard = ({ pkg }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img
          src={pkg.image || "/default-tour.jpg"} // fallback image
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        {pkg.rating && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-yellow-600 px-2 py-1 text-sm rounded flex items-center gap-1 shadow-sm">
            <Star size={14} className="fill-yellow-400" />
            {pkg.rating.toFixed(1)}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-yellow-800 mb-1">{pkg.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{pkg.shortDescription}</p>

        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
          <MapPin size={16} className="text-yellow-600" />
          {pkg.location}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
          <CalendarDays size={16} className="text-yellow-600" />
          {pkg.duration}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
          <IndianRupee size={16} className="text-yellow-600" />
          <span className="font-semibold text-2xl text-green-500">₹{pkg.price}</span>
        </div>

        <Link to={`/pages/packages/${pkg.id}`} state={{ pkg }}>
          <button className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TourPackageCard;
