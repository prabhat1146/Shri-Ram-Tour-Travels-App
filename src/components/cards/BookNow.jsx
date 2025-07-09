import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const serverUrl = process.env.REACT_APP_SERVER_URL;

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
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    if (!selectedPackage) {
      setErrorMsg("No tour package selected.");
      setSubmitting(false);
      return;
    }

    try {
      const suburl = `${serverUrl}/api/v1/user/booking/book-now`;
      const payload = { ...formData, packageId: selectedPackage._id };
      console.log(suburl)
      console.log(payload)
      console.log(serverUrl)
      
      const res = await axios.post(suburl, payload);

      if (res.status === 200 || res.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setErrorMsg("Booking failed. Please try again.");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Server error. Please try later.";
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
          Book This Tour
        </h2>

        {selectedPackage ? (
          <div className="bg-yellow-100 text-yellow-900 p-4 mb-6 rounded-md border border-yellow-300">
            <h3 className="text-lg font-semibold mb-1">
              {selectedPackage.name}
            </h3>
            <p className="text-sm mb-1">
              {selectedPackage.duration} • ₹{selectedPackage.price}
            </p>
            <p className="text-gray-700 text-sm italic">
              {selectedPackage.shortDescription}
            </p>
          </div>
        ) : (
          <div className="text-red-600 mb-4 text-center font-semibold">
            No tour package selected for booking.
          </div>
        )}

        {errorMsg && (
          <div className="text-red-600 text-center mb-4 font-medium">
            ❌ {errorMsg}
          </div>
        )}

        {success ? (
          <div className="text-green-600 text-center font-semibold">
            ✅ Booking confirmed! Redirecting you shortly...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
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
              pattern="[0-9]{10}"
              className="w-full p-3 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="travelers"
              min="1"
              placeholder="Number of Travelers"
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
              disabled={submitting}
              className={`w-full py-3 rounded-md text-white text-lg shadow transition ${
                submitting
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
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
