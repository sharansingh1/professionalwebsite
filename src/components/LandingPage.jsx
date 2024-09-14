import React from 'react';
import ThreeDCharacter from './ThreeDCharacter';

function LandingPage({ imageSrc }) {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-aesthetic mb-4">Sharanjeet Singh</h1>
        <p className="text-xl md:text-2xl font-aesthetic mb-4">Software Engineer</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-50">
      </div>
    </div>
  );
}

export default LandingPage;
