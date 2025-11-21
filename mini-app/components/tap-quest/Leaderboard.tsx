'use client';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/contracts';

export default function Leaderboard() {
  const [topPlayers, setTopPlayers] = useState<
    { address: string; score: number }[]
  >([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Create a provider (use default provider or your own)
        const provider = ethers.getDefaultProvider();

        // Instantiate the contract
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          provider
        );

        // Example: fetch scores for a list of known player addresses
        const playerAddresses = [
          // Replace with real addresses or fetch from events
          '0x0000000000000000000000000000000000000000',
          '0x1111111111111111111111111111111111111111',
          '0x2222222222222222222222222222222222222222',
        ];

        const scores = await contract.getScores(playerAddresses);

        const players = playerAddresses.map((addr, idx) => ({
          address: addr,
          score: Number(scores[idx]),
        }));

        // Sort descending and take top 3
        const sorted = players
          .sort((a, b) => b.score - a.score)
          .slice(0, 3);

        setTopPlayers(sorted);
      } catch (err) {
        console.error('Failed to fetch leaderboard', err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="mt-8 w-full max-w-md bg-white/10 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
      <ul className="space-y-1">
        {topPlayers.map((p, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{p.address.slice(0, 6)}…{p.address.slice(-4)}</span>
            <span>{p.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
