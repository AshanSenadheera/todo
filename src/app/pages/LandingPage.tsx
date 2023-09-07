// /src/app/components/LandingPage.tsx
import React from 'react';

const LandingPage = ({ onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to ASLK Todo App</h1>
      <p className="text-lg mb-8">Organize your tasks effortlessly with our simple to-do app.</p>
      <button
        onClick={onGetStartedClick}
        className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-700 hover:text-white"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
