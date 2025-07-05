import React from 'react';
import { Bus, Mountain, Hotel, Phone, CalendarDays, Smile, MapPin, ShieldCheck, CarTaxiFront, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-yellow-50 text-yellow-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-6xl font-bold mb-4">Shri Ram Tour & Travels</h1>
        <p className="text-xl max-w-3xl mb-6">Discover India with us – affordable, safe, and spiritual tours across the country.</p>
        <Link to={"/pages/explore-packages"} className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700">Explore Packages</Link>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-10">
          {[{ icon: Bus, label: 'Bus Booking' }, { icon: Mountain, label: 'Hill Station Tours' }, { icon: Hotel, label: 'Hotel Stay' }, { icon: CalendarDays, label: 'Custom Itinerary' }, { icon: CarTaxiFront, label: 'Cab Services' }].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="h-12 w-12 text-yellow-600 mb-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-yellow-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Shri Ram Travels?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[{ icon: ShieldCheck, text: 'Trusted & Verified Drivers' }, { icon: UserCheck, text: 'Thousands of Happy Customers' }, { icon: Smile, text: '24/7 Customer Support' }].map(({ icon: Icon, text }) => (
            <div key={text} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Icon className="h-10 w-10 text-yellow-600 mb-4" />
              <p className="text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {["Ayodhya", "Varanasi", "Haridwar", "Rishikesh", "Mathura", "Vrindavan", "Jaipur", "Ujjain"].map((place) => (
            <div key={place} className="border p-4 rounded-lg shadow-md bg-yellow-50">
              <MapPin className="mx-auto h-6 w-6 text-yellow-600 mb-2" />
              <p className="font-semibold">{place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-yellow-100 text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {["Excellent service and safe journey!", "Affordable and well-organized packages.", "Highly recommend for family tours.", "Very professional and friendly drivers."].map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="italic">“{review}”</p>
              <p className="mt-2 font-semibold">- Happy Traveler</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <Phone className="h-10 w-10 text-yellow-600 mx-auto mb-4" />
        <p className="text-lg">Call us: +91 9876543210</p>
        <p className="text-lg">Email: contact@shriramtravels.com</p>
      </section>

     
    </div>
  );
};

export default Home;
