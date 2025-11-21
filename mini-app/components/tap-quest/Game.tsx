'use client';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import ScoreButton from './ScoreButton';

export default function Game({ onEnd }: { onEnd: (score: number) => void }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      onEnd(score);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, score, onEnd]);

  const handleTap = () => setScore(score + 1);

  return (
    <div className="flex flex-col items-center gap-8">
      <Timer time={timeLeft} />
      <ScoreButton onTap={handleTap} />
      <div className="text-2xl">Score: {score}</div>
    </div>
  );
}
