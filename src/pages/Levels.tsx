import React from 'react';
import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { Star, Lock } from 'lucide-react';

const Levels: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose a Level</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {levels.map((level) => (
          <Link
            key={level.id}
            to={`/game/${level.id}`}
            className="level-card group"
          >
            <div className="relative">
              <img
                src={level.image}
                alt={level.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              {level.completed && (
                <div className="absolute top-2 right-2">
                  <Star className="text-yellow-400 fill-current" />
                </div>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{level.name}</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {level.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{level.pieces} pieces</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Levels;