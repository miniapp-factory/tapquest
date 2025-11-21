'use client';
import { useState } from 'react';
import Game from './Game';
import End from './End';
import Leaderboard from './Leaderboard';
import FrameDetection from './FrameDetection';

export default function Home() {
  const [stage, setStage] = useState<'home' | 'game' | 'end'>('home');
  const [score, setScore] = useState(0);

  const startGame = () => setStage('game');
  const endGame = (finalScore: number) => {
    setScore(finalScore);
    setStage('end');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-500 text-white">
      {stage === 'home' && (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Tap Quest</h1>
          <button
            className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition"
            onClick={startGame}
          >
            Start
          </button>
        </div>
      )}
      {stage === 'game' && <Game onEnd={endGame} />}
      {stage === 'end' && <End score={score} />}
      <Leaderboard />
      <FrameDetection />
    </div>
  );
}
