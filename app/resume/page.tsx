import type { Metadata } from "next";
import ResumeScreen from "@Screens/Resume/Resume.Screen";

export const metadata: Metadata = {
  title: "Miguel Delgado - Resume",
};

export default function Resume() {
  return <ResumeScreen />;
}
