import { Metadata } from "next";
import TrackRecordContent from "@/components/track-record/TrackRecordContent";

export const metadata: Metadata = {
  title: "Track Record | Warehouster",
  description: "Explore our track record of industrial transactions across South India.",
};

export default function TrackRecordPage() {
  return <TrackRecordContent />;
}
