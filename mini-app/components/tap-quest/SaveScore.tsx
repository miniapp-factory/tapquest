'use client';
export default function SaveScore({ score }: { score: number }) {
  const handleSave = () => {
    // Placeholder for on-chain save logic
    alert(`Score ${score} saved on-chain!`);
  };
  return (
    <button
      className="px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-gray-200 transition"
      onClick={handleSave}
    >
      Save Score
    </button>
  );
}
