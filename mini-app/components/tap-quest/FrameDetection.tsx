'use client';
import { useEffect } from 'react';

export default function FrameDetection() {
  const [isFrame, setIsFrame] = useState(false);

  useEffect(() => {
    const frame = (window as unknown as { frame?: { isFrame?: boolean } })?.frame;
    setIsFrame(!!frame?.isFrame);
  }, []);

  return null;
}
