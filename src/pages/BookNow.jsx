import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state?.pkg;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API request — replace with fetch("/api/book", {...})
    setTimeout(() => {
      setSuccess(true);
      setSubmitting(false);

      // Optionally redirect or reset
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4 text-center">
          Book Now
        </h2>

        {selectedPackage ? (
          <div className="bg-yellow-100 text-yellow-900 p-4 mb-6 rounded-md">
            <p>
              Booking for: <strong>{selectedPackage.name}</strong>
            </p>
            <p className="text-sm text-gray-700">{selectedPackage.duration} – ₹{selectedPackage.price}</p>
          </div>
        ) : (
          <div className="text-red-600 mb-4">No package selected</div>
        )}

        {success ? (
          <div className="text-green-600 text-center font-semibold">
            ✅ Booking confirmed! You’ll be redirected shortly...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="travelers"
              placeholder="Number of Travelers"
              min="1"
              className="w-full p-3 border rounded-md"
              value={formData.travelers}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              className="w-full p-3 border rounded-md"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition"
              disabled={submitting}
            >
              {submitting ? "Booking..." : "Confirm Booking"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookNow;
