"use client";

import LandingPage from "@/components/LandingPagecomponents/LandingPage";
import NavBar from "@/components/LandingPagecomponents/NavBar";
import MetaMaskAutoConnect from "./metamask/MetaMaskConnect";

export default function Home() {
  return (
    <div>
      <NavBar index={undefined} />
      <MetaMaskAutoConnect /> {/* Render the component */}
      <LandingPage />
    </div>
  );
}
