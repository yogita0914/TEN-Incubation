import React from "react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition"
      >
        Go Home
      </a>
    </div>
  );
}
