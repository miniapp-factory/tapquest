import { generateMetadata } from "@/lib/farcaster-embed";
import Home from "@/components/tap-quest/Home";

export { generateMetadata };

import { MiniAppProvider } from "@/components/context/miniapp-provider";

export default function HomePage() {
  return (
    <MiniAppProvider>
      <Home />
    </MiniAppProvider>
  );
}
