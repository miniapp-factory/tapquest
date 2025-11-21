'use client';
export default function Leaderboard() {
  // Placeholder leaderboard data
  const topPlayers = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 110 },
    { name: 'Carol', score: 100 },
  ];
  return (
    <div className="mt-8 w-full max-w-md bg-white/10 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
      <ul className="space-y-1">
        {topPlayers.map((p, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{p.name}</span>
            <span>{p.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
