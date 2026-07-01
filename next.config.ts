import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";

// Copie automatique du favicon depuis public/ vers src/app/
try {
  const src = path.join(__dirname, "public", "favicon.png");
  const dest = path.join(__dirname, "src", "app", "favicon.png");
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("=== FAVICON COPIÉ DE PUBLIC VERS SRC/APP ===");
  }
} catch (err) {
  console.error("=== ERREUR lors de la copie du favicon :", err);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

