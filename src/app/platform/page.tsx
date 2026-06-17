import { Metadata } from "next";
import PlatformContent from "@/components/platform/PlatformContent";

export const metadata: Metadata = {
  title: "Platform | Warehouster — AI-Powered Industrial Intelligence",
  description:
    "The data and AI layer making South India industrial real estate finally legible. BTS Calculator, AI agents, and first-principles intelligence.",
};

export default function PlatformPage() {
  return <PlatformContent />;
}
