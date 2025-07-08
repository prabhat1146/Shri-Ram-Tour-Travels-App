import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-28 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Welcome to <strong>Lakshya Cabs</strong>. By booking or using our website and services,
          you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          1. Booking Confirmation
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          All bookings are confirmed only after receipt of the advance payment. A confirmation email
          or WhatsApp message will be sent after successful booking. Full payment must be made before or at the time of pickup.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          2. Pricing & Inclusions
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Package prices are inclusive of driver allowance, tolls, parking, and applicable permits unless otherwise mentioned.
          Any extra usage of the vehicle (e.g., beyond itinerary) may incur additional charges.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          3. Cancellations & Refunds
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Cancellations must be made in writing (email or WhatsApp). Refunds will be processed as per our cancellation policy.
          For detailed terms, refer to our <a href="/cancellation-policy" className="text-yellow-700 underline">Cancellation Policy</a>.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          4. Responsibilities of the Traveller
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Provide accurate personal and contact information during booking.</li>
          <li>Be present on time for pickup to avoid delays and additional charges.</li>
          <li>Behave respectfully with the driver and follow traffic and safety rules.</li>
        </ul>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          5. Vehicle & Driver Allocation
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          We reserve the right to change the vehicle model based on availability. All drivers are licensed,
          experienced, and trained for hill and city driving.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          6. Force Majeure
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          We shall not be liable for any delay, changes, or cancellations due to events beyond our control,
          such as natural calamities, strikes, roadblocks, or accidents.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">
          7. Disputes & Jurisdiction
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          All disputes are subject to the jurisdiction of Varanasi, Uttar Pradesh courts only.
        </p>

        <p className="text-xs text-gray-500 mt-8">
          Last Updated: July 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
