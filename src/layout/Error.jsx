import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 text-yellow-900 px-4">
      <AlertTriangle className="w-16 h-16 text-yellow-600 mb-6" />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center max-w-md mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
