import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { levels } from '../data/levels';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const Game: React.FC = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = levels.find(l => l.id === Number(levelId));
  const [pieces, setPieces] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (!level) return;
    const newPieces = Array.from({ length: level.pieces }, (_, i) => i);
    setPieces(shuffleArray([...newPieces]));
  }, [level]);

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (!level) return null;

  const gridSize = Math.sqrt(level.pieces);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/levels')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2" /> Back to Levels
          </button>
          <h2 className="text-2xl font-bold">{level.name}</h2>
          <button
            onClick={() => setPieces(shuffleArray([...pieces]))}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <RefreshCw className="mr-2" /> Shuffle
          </button>
        </div>

        <div className={`puzzle-grid grid-${gridSize}`}>
          {pieces.map((pieceIndex) => (
            <div
              key={pieceIndex}
              className="puzzle-piece"
              style={{
                backgroundImage: `url(${level.image})`,
                backgroundSize: `${gridSize * 100}%`,
                backgroundPosition: `${(pieceIndex % gridSize) * 100}% ${Math.floor(pieceIndex / gridSize) * 100}%`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;