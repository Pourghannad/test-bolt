import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MousePointer, Trophy } from 'lucide-react';

const Tutorial: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">How to Play</h1>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <MousePointer className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Click and Drag</h3>
              <p className="text-gray-600">
                Click and drag puzzle pieces to swap their positions. Try to recreate the original image!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <HelpCircle className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Start Simple</h3>
              <p className="text-gray-600">
                Begin with easier levels to get familiar with the controls. Each level increases in difficulty with more pieces.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Trophy className="text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Complete Levels</h3>
              <p className="text-gray-600">
                Finish each puzzle to unlock new challenges. Try to complete all five levels!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/levels" className="btn-primary">
            Start Playing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;