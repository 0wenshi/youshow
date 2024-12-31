import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// import actor1 from '/images/actors/Annie.jpg';
// import actor2 from '/images/actors/Bazi.jpg';
// import actor3 from '/images/actors/Charlotte.jpg';
// import actor4 from '/images/actors/Laohu.jpg';
// import actor5 from '/images/actors/Qixue.jpg';
// import actor6 from '/images/actors/Summer.jpg';
// import actor7 from '/images/actors/Vincent.jpg';
// import actor8 from '/images/actors/Wanning.jpg';

// const files = [
//   {
//     id: 'annie',
//     image: actor1,
//   },
//   {
//     id: 'bazi',
//     image: actor2,
//   },
//   {
//     id: 'charlotte',
//     image: actor3,
//   },
//   {
//     id: 'laohu',
//     image: actor4,
//   },
//   {
//     id: 'qixue',
//     image: actor5,
//   },
//   {
//     id: 'summer',
//     image: actor6,
//   },
//   {
//     id: 'vincent',
//     image: actor7,
//   },
//   {
//     id: 'wanning',
//     image: actor8,
//   },
// ];

function Actors() {
  const { t } = useTranslation();
  const [actors, setActors] = useState([]);
  
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/actors');
        setActors(response.data);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };
    fetchActors();
  })

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
      {actors.map((actor) => (
        <div
          key={actor.id}
          className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center"
        >
          {/* Image Section */}
          <img
            src={actor.image} // Assuming `image` is a URL string
            alt={t(`actors.${actor.id}.title`, { fallback: actor.title })}
            className="w-52 h-80 object-cover rounded-lg"
          />
          {/* Text Section */}
          <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-orange-500 text-3xl font-black mb-4">
              {t(`actors.${actor.id}.title`, { fallback: actor.title })}
            </h2>
            <h3 className="text-black text-lg font-semibold mb-4">
              {t(`actors.${actor.id}.subtitle`, { fallback: actor.subtitle })}
            </h3>
            <p className="text-black text-base font-sansregular">
              {t(`actors.${actor.id}.description`, {
                fallback: actor.description,
              })}
            </p>
          </div>
        </div>
      ))}
      <p className="mt-5 pt-5 text-left text-xs font-bold text-gray-800">
        {t('actors.note', 'Actors are dynamically loaded from the database.')}
      </p>
    </div>
  );
}

export default Actors;
