import { PropsWithChildren } from "react";

/**
 * The props of the ProgressButton component.
 */
type ProgressButtonProps = {
  /**
   * The type of the button.
   */
  type?: "submit" | "button";
};

/**
 * Component that displays the progress button.
 */
const ProgressButton: React.FC<PropsWithChildren<ProgressButtonProps>> = ({
  children,
  type = "button",
}) => {
  return (
    <button
      className="w-full bg-primary-color py-3 px-10 cursor-pointer inline-block text-[inherit]
                uppercase relative transition-all duration-[0.4s] ease-in-out
                after:content-[''] after:absolute after:top-0 after:left-0 after:w-0 after:h-1 after:bottom-0 after:opacity-70 after:transition-all after:duration-[0.4s] after:ease-in-out
                hover:after:w-full hover:after:bg-white"
      type={type}
    >
      {children}
    </button>
  );
};

export default ProgressButton;
