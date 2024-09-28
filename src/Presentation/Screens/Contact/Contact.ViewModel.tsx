import { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function useContactViewModel() {
  /**
   * Reference to the form element.
   */
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Method to send the email with EmailJS.
   */
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        event.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .catch(() => {
        toast.error("Message not sent!");
      });
    if (email) {
      toast.success("Message sent!");
      formRef.current?.reset();
    }
  };

  return {
    formRef,
    sendEmail,
  };
}
