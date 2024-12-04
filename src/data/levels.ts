import { Level } from '../types/game';

export const levels: Level[] = [
  {
    id: 1,
    name: 'Mountain Lake',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    difficulty: 'easy',
    pieces: 9,
    completed: false
  },
  {
    id: 2,
    name: 'Forest Path',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    difficulty: 'easy',
    pieces: 16,
    completed: false
  },
  {
    id: 3,
    name: 'Desert Sunset',
    image: 'https://images.unsplash.com/photo-1682686580391-615b1e32be5c',
    difficulty: 'medium',
    pieces: 25,
    completed: false
  },
  {
    id: 4,
    name: 'Ocean Waves',
    image: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c',
    difficulty: 'medium',
    pieces: 36,
    completed: false
  },
  {
    id: 5,
    name: 'Northern Lights',
    image: 'https://images.unsplash.com/photo-1682686580950-960d1d513532',
    difficulty: 'hard',
    pieces: 49,
    completed: false
  }
];