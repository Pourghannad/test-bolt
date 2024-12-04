import React from 'react';
import { Link } from 'react-router-dom';
import { Puzzle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <Puzzle size={48} className="text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Picture Perfect Puzzles</h1>
        <p className="text-xl text-gray-600 mb-8">Challenge yourself with beautiful puzzle games</p>
        <div className="space-y-4">
          <Link to="/levels" className="btn-primary block w-full">
            Start Playing
          </Link>
          <Link to="/tutorial" className="btn-secondary block w-full">
            How to Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;