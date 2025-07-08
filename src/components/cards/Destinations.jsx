import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Landmark } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Ayodhya",
    state: "Uttar Pradesh",
    description:
      "The birthplace of Lord Rama, known for Ram Janmabhoomi and temples.",
  },
  {
    id: 2,
    name: "Varanasi",
    state: "Uttar Pradesh",
    description:
      "One of the world's oldest cities, known for Ganga Aarti and spirituality.",
  },
  {
    id: 3,
    name: "Haridwar",
    state: "Uttarakhand",
    description:
      "Sacred city on the Ganga River, gateway to the Char Dham Yatra.",
  },
  {
    id: 4,
    name: "Rishikesh",
    state: "Uttarakhand",
    description:
      "Yoga capital of the world, popular for ashrams and river rafting.",
  },
  {
    id: 5,
    name: "Jaipur",
    state: "Rajasthan",
    description:
      "The Pink City, famous for forts, palaces and rich Rajasthani heritage.",
  },
  {
    id: 6,
    name: "Bodhgaya",
    state: "Bihar",
    description:
      "Sacred Buddhist site where Lord Buddha attained enlightenment.",
  },
  {
    id: 7,
    name: "Dwarka",
    state: "Gujarat",
    description:
      "An ancient city associated with Lord Krishna, one of the Char Dhams.",
  },
  {
    id: 8,
    name: "Madurai",
    state: "Tamil Nadu",
    description:
      "Home to Meenakshi Temple, a vibrant spiritual and architectural center.",
  },
  {
    id: 9,
    name: "Puri",
    state: "Odisha",
    description:
      "Coastal pilgrimage town famous for Jagannath Temple and Rath Yatra.",
  },
  {
    id: 10,
    name: "Amritsar",
    state: "Punjab",
    description:
      "Home to the Golden Temple, a spiritual and cultural epicenter for Sikhs.",
  },
];

const Destination = () => {
  const navigate = useNavigate();

  const handleExplore = (locationName) => {
    navigate(`/packages?location=${encodeURIComponent(locationName)}`);
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-800 text-center mb-12">
          Top Spiritual & Cultural Destinations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                <Landmark size={20} className="text-yellow-600" />
                {dest.name}
              </h2>

              <div className="flex items-center text-sm text-gray-700 mb-2">
                <MapPin size={16} className="text-yellow-600 mr-1" />
                {dest.state}
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {dest.description}
              </p>

              <button
                className="w-full py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition"
                onClick={() => handleExplore(dest.name)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
