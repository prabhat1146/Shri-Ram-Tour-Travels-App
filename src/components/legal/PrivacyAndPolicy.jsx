import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-28 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          At <strong>Lakshya Cabs</strong>, we value your privacy and are committed to protecting
          the personal information you share with us. This Privacy Policy outlines how we collect,
          use, and safeguard your data when you visit our website or book a service.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Name, email address, and phone number</li>
          <li>Pickup and drop-off locations</li>
          <li>Travel preferences and booking details</li>
          <li>Device and browser data (cookies, IP address)</li>
        </ul>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>To process and confirm your bookings</li>
          <li>To send you trip-related updates</li>
          <li>To improve our website and services</li>
          <li>To respond to your queries or concerns</li>
        </ul>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">3. Data Sharing</h2>
        <p className="text-gray-700 text-sm mb-4">
          We do not sell or rent your personal information to third parties. We may share
          your data with:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          <li>Our drivers and travel partners for operational purposes</li>
          <li>Law enforcement or authorities as required by law</li>
        </ul>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-700 text-sm mb-4">
          We implement appropriate security measures to protect your personal data from unauthorized
          access, misuse, or alteration. However, no system is 100% secure, and we cannot guarantee
          absolute protection.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">5. Cookies</h2>
        <p className="text-gray-700 text-sm mb-4">
          Our website uses cookies to personalize your experience, analyze site traffic, and
          serve targeted advertisements. You can manage or disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">6. Your Rights</h2>
        <p className="text-gray-700 text-sm mb-4">
          You may request access to, correction of, or deletion of your personal data at any time.
          Please email us at <a href="mailto:support@lakshyacabs.in" className="text-yellow-700 underline">support@lakshyacabs.in</a>.
        </p>

        <h2 className="text-xl font-semibold text-yellow-600 mt-6 mb-2">7. Policy Updates</h2>
        <p className="text-gray-700 text-sm mb-4">
          We reserve the right to update this Privacy Policy at any time. Changes will be posted
          on this page with a revised date.
        </p>

        <p className="text-gray-600 text-xs mt-8">
          Last updated: July 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
