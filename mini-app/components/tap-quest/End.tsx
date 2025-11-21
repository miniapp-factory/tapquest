'use client';
import SaveScore from './SaveScore';
export default function End({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl">Game Over</h2>
      <p className="text-2xl">Your score: {score}</p>
      <SaveScore score={score} />
    </div>
  );
}
