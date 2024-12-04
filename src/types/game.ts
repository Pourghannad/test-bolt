export interface Level {
  id: number;
  name: string;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
  pieces: number;
  completed: boolean;
}

export interface GameState {
  currentLevel: number;
  levels: Level[];
  score: number;
}