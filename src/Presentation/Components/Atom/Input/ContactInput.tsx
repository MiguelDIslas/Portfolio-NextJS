/**
 * Props for ContactInput component.
 */
type ContactInputProps = {
  /**
   * The id of the input.
   */
  id: string;

  /**
   * The title of the input.
   */
  title: string;

  /**
   * The type of the input.
   */
  type?: string;
};

/**
 * Component to render a input for contact form.
 */
const ContactInput: React.FC<ContactInputProps> = ({
  id,
  title,
  type = "text",
}) => {
  return (
    <div className="mt-8 relative w-full">
      <label
        className="absolute left-5 -top-5 inline-block bg-background-dark-color py-0 px-2 text-[inherit]"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="bg-transparent border-[1px] border-border-color outline-none text-[inherit] w-full py-3 px-4"
        id={id}
        name={id}
        type={type}
      />
    </div>
  );
};

export default ContactInput;
