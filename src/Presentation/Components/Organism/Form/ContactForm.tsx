import ProgressButton from "@Components/Atom/Button/ProgressButton";
import ContactInput from "@Components/Atom/Input/ContactInput";
import i18n from "@Language/i18n";

/**
 * The props of the ContactForm component.
 */
type ContactFormProps = {
  /**
   * The reference of the form.
   */
  formRef: React.RefObject<HTMLFormElement>;

  /**
   * The function to send email.
   */
  sendEmail: (event: React.FormEvent<HTMLFormElement>) => void;
};

/**
 * Component that displays the contact form.
 */
const ContactForm: React.FC<ContactFormProps> = ({ formRef, sendEmail }) => {
  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <div className="grid grid-cols-1">
        <form ref={formRef} onSubmit={sendEmail} className="w-full">
          <ContactInput
            id="name"
            title={i18n.t("contact.input.base", {
              name: i18n.t("contact.input.name"),
            })}
          />
          <ContactInput
            id="email"
            title={i18n.t("contact.input.base", {
              name: i18n.t("contact.input.email"),
            })}
            type="email"
          />
          <ContactInput
            id="subject"
            title={i18n.t("contact.input.base", {
              name: i18n.t("contact.input.subject"),
            })}
          />
          <div className="mt-8 relative w-full">
            <label
              className="absolute left-5 -top-5 inline-block bg-background-dark-color py-0 px-2 text-[inherit]"
              htmlFor="message"
            >
              {i18n.t("contact.input.base", {
                name: i18n.t("contact.input.message"),
              })}
            </label>
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={7}
              className="resize-none bg-transparent border-[1px] border-border-color outline-none text-[inherit] w-full py-3 px-4"
            ></textarea>
          </div>
          <div className="mt-8 relative w-full mb-12 md:mb-">
            <ProgressButton type="submit">
              {i18n.t("contact.button")}
            </ProgressButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
