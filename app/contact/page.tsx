import type { Metadata } from "next";
import ContactScreen from "@Screens/Contact/Contact.Screen";

export const metadata: Metadata = {
  title: "Miguel Delgado - Contact",
};

export default function Contact() {
  return <ContactScreen />;
}
