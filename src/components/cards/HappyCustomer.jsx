import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Delhi to Vaishno Devi Tour',
    review:
      'The experience with Shri Ram Tour and Travels was outstanding! The journey was comfortable, the hotels were clean, and the guide was very helpful.',
  },
  {
    name: 'Amit Trivedi',
    role: 'Chardham Yatra',
    review:
      'We had a smooth and divine trip. Everything was perfectly managed — from transport to accommodation. Will definitely recommend to family and friends.',
  },
  {
    name: 'Neha Agarwal',
    role: 'Family Vacation to Himachal',
    review:
      'It was our best trip yet! The vehicle was spacious, driver polite, and the overall support team was very responsive.',
  },
];

const HappyCustomer = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Happy Travellers
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Thousands of customers trust Shri Ram Tour and Travels for safe, spiritual, and scenic journeys across India.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((customer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-300" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{customer.review}"</p>
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {customer.name}
                </p>
                <p className="text-sm text-gray-500">{customer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;
