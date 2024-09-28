import type { Metadata } from "next";
import PortfolioScreen from "@Screens/Portfolio/Portfolio.Screen";

export const metadata: Metadata = {
  title: "Miguel Delgado - Portfolio",
};

export default function Portfolio() {
  return <PortfolioScreen />;
}