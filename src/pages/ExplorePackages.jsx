import React from "react";
import { CalendarDays, MapPin, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import TourPackageCard from "../components/cards/TourPackageCard";
import TourPackageDatas from "../data/TourPackageData";

const tourPackages = [
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Kedarnath, Uttarakhand",
    duration: "5 Days / 4 Nights",
    price: 9500,
    shortDescription:
      "A sacred pilgrimage to Kedarnath temple via Haridwar and Sonprayag.",
    rating: 4.8,
  },
  {
    id: "manali-snow",
    name: "Manali Snow Retreat",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Manali, Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    price: 12000,
    shortDescription:
      "Enjoy snow-capped mountains and adventure activities in Manali.",
    rating: 4.6,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
  {
    id: "jaipur-royal",
    name: "Jaipur Royal Tour",
    image: "/assets/packages/Kedarnath Temple via Haridwar and Sonprayag.png",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 7200,
    shortDescription:
      "Explore forts, palaces, and vibrant culture in the Pink City.",
    rating: 4.4,
  },
];

// const packages = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   name: `Package ${i + 1} - Cultural & Spiritual Journey`,
//   location: [
//     "Ayodhya, UP",
//     "Varanasi, UP",
//     "Uttarakhand",
//     "Jaipur, Rajasthan",
//     "Vrindavan, UP",
//     "Haridwar, UK",
//     "Delhi, Agra",
//     "Kerala",
//     "Sikkim",
//     "Bodhgaya, Bihar",
//     "Tamil Nadu",
//     "Meghalaya",
//     "Chhattisgarh",
//   ][i % 13],
//   price: `${Math.floor(Math.random() * 15000) + 4999}`,
//   duration: [
//     "2 Days / 1 Night",
//     "3 Days / 2 Nights",
//     "4 Days / 3 Nights",
//     "5 Days / 4 Nights",
//     "6 Days / 5 Nights",
//     "7 Days / 6 Nights",
//     "10 Days / 9 Nights",
//   ][i % 7],
// }));

const ExplorePackages = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-800 text-center mb-12">
          Explore Our Tour Packages
        </h1>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {packages?.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-yellow-700 mb-2">
                {pkg.name}
              </h2>
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
                Starting at ₹{pkg.price}
              </div>
              <Link
                to={`/pages/packages/${pkg.id}`}
                state={{ pkg }} // ✅ Pass full package as props
              >
                <button className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-1">
          {TourPackageDatas?.map((pkg) => (
            <TourPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePackages;
