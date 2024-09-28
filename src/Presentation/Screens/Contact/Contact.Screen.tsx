"use client";
import useContactViewModel from "./Contact.ViewModel";
import Title from "@Components/Atom/Text/Title";
import ContactForm from "@Components/Organism/Form/ContactForm";
import i18n from "@Language/i18n";

export default function ContactScreen() {
  const { formRef, sendEmail } = useContactViewModel();

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <Title text={i18n.t("contact.title")} />
      <ContactForm formRef={formRef} sendEmail={sendEmail} />
    </div>
  );
}
