import type { Metadata } from "next";
import AboutScreen from "@Screens/About/About.Screen";

export const metadata: Metadata = {
  title: "Miguel Delgado - About",
};

export default function About() {
  return <AboutScreen />;
}
