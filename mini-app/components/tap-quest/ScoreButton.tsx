'use client';
export default function ScoreButton({ onTap }: { onTap: () => void }) {
  return (
    <button
      className="w-48 h-48 bg-white text-indigo-600 rounded-full text-4xl font-bold hover:bg-gray-200 transition"
      onClick={onTap}
    >
      Tap
    </button>
  );
}
