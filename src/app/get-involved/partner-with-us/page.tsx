import type { Metadata } from "next";
import PartnerWithUsClient from "./PartnerWithUsClient";

export const metadata: Metadata = {
  title: "Partner With Us | Strategic Alliances & Green Solutions | HOJA Network",
  description: "Collaborate with HOJA Network on clean cooking, Virunga biodiversity conservation, Congo Basin agroforestry, green youth enterprise incubation, and grassroots resilience.",
};

export default function PartnerWithUsPage() {
  return <PartnerWithUsClient />;
}
