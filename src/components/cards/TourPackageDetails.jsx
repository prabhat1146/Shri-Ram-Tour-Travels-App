import React from "react";
import {
  MapPin,
  CalendarDays,
  IndianRupee,
  Star,
  Car,
  Info,
  CheckCircle,
  MinusCircle,
  XCircle,
  Route,
  Landmark,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TourPackageDetails = () => {
  const location = useLocation();
  const pkg = location.state?.pkg;

  if (!pkg) {
    return <>Loading</>;
  }
  console.log(pkg);
  return (
    <section className="bg-yellow-50 py-12 px-4 md:px-8">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        {/* Image & Title */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/2">
            <img
              src={pkg.image || "/default-tour.jpg"}
              alt={pkg.name}
              className="w-full h-64 object-cover rounded shadow-sm"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-yellow-800 mb-2">
              {pkg.name}
            </h1>
            <p className="text-gray-600 mb-4">{pkg.shortDescription}</p>

            <div className="text-sm text-gray-700 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-600" />
                <strong>From:</strong> {pkg.from}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-600" />
                <strong>To:</strong> {pkg.to}
              </div>
              {pkg.via.length > 0 && (
                <div className="flex items-start gap-2">
                  <Route size={16} className="text-yellow-600 mt-1" />
                  <div>
                    <strong>Via:</strong>{" "}
                    {pkg.via.map((city, i) => (
                      <span key={i}>
                        {city}
                        {i < pkg.via.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-yellow-600" />
                <strong>Duration:</strong> {pkg.duration}
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={16} className="text-yellow-600" />
                <strong>Price:</strong>{" "}
                <span className="text-lg font-semibold text-yellow-700">
                  ₹{pkg.price}
                </span>{" "}
                (incl. taxes)
              </div>
              {pkg.rating && (
                <div className="flex items-center gap-1 text-yellow-600">
                  <Star className="fill-yellow-400" size={16} />
                  {pkg.rating.toFixed(1)} / 5
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sections */}
        {pkg?.description && (
          <Section
            title="Description"
            icon={<Info size={20} />}
            content={pkg.description}
          />
        )}

        {pkg.vehicles.length > 0 && (
          <Section
            title="Vehicle Options"
            icon={<Car size={20} />}
            list={pkg.vehicles}
          />
        )}

        {pkg.itinerary.length > 0 && (
          <Section
            title="Itinerary"
            icon={<Landmark size={20} />}
            list={pkg.itinerary}
            type="ordered"
          />
        )}

        {pkg.inclusions.length > 0 && (
          <Section
            title="Inclusions"
            icon={<CheckCircle size={20} />}
            list={pkg.inclusions}
          />
        )}

        {pkg.exclusions.length > 0 && (
          <Section
            title="Exclusions"
            icon={<MinusCircle size={20} />}
            list={pkg.exclusions}
          />
        )}

        {pkg.cancellationPolicy.length > 0 && (
          <Section
            title="Cancellation Policy"
            icon={<XCircle size={20} />}
            list={pkg.cancellationPolicy}
          />
        )}

        <div className="mt-8 text-center">
          <Link to="/pages/book-now" state={{ pkg }}>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg shadow">
              Book This Tour
            </button>
          </Link>
        </div>
      </div>
    </section>
    // <div></div>
  );
};

const Section = ({ title, icon, content, list = [], type = "unordered" }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
      {icon} {title}
    </h2>
    {content && <p className="text-gray-800">{content}</p>}
    {list.length > 0 && (
      <ul
        className={`${
          type === "ordered" ? "list-decimal" : "list-disc"
        } list-inside text-gray-700 ml-2`}
      >
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default TourPackageDetails;
