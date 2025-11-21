'use client';
import { useEffect } from 'react';

export default function FrameDetection() {
  useEffect(() => {
    const frame = (window as unknown as { frame?: { isFrame?: boolean } })?.frame;
    // Frame detection logic can be expanded here if needed
  }, []);

  return null;
}
