'use client';
export default function Timer({ time }: { time: number }) {
  return <div className="text-4xl font-mono">{time}s</div>;
}
