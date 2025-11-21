'use client';
import { useEffect, useState } from 'react';

export default function FrameDetection() {
  const [isFrame, setIsFrame] = useState(false);

  useEffect(() => {
    const frame = (window as any)?.frame;
    setIsFrame(!!frame?.isFrame);
  }, []);

  return null;
}
