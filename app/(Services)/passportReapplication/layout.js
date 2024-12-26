import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/LandingPagecomponents/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Decentra",
  description: "Generated by create next app",
};

export default function ReApplyLayout({ children }) {
  return (
    <>
    <NavBar index={undefined} />
    {children}
    </>
  );
}
