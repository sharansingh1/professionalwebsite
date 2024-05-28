import React from "react";

function Extra() {
  const activities = [
    {
      img: 'extra1.jpg',
      text: 'Basketball'
    },
    {
      img: 'extra2.jpg',
      text: 'Martial Arts'
    },
    {
      img: 'extra3.jpg',
      text: 'Bhangra'
    },
    {
      img: 'extra4.jpg',
      text: 'Anime'
    },
  ];

  return (
    <div id="extra" className="bg-black text-white py-20">
      <h1 className="text-4xl text-center mb-6 font-aesthetic">Extracurricular</h1>
      <div className="w-full h-screen grid grid-cols-2 grid-rows-2 font-poiret">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative group w-full h-full"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${activity.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4">
                {activity.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extra;
