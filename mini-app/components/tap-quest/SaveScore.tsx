'use client';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/contracts';

export default function SaveScore({ score }: { score: number }) {
  const handleSave = async () => {
    try {
      // Request account access if needed
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      const tx = await contract.submitScore(score);
      await tx.wait();

      alert(`Score ${score} saved on-chain!`);
    } catch (err) {
      console.error('Failed to submit score', err);
      alert('Failed to save score on-chain.');
    }
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
