import { FaGithub } from "react-icons/fa";
import { UrlsEnum } from "@Enum/UrlsEnum";

/**
 * The Button for the code repository.
 */
const CodeButton = () => {
  return (
    <a
      title="Github Code"
      href={UrlsEnum.CodeRepository}
      target="_blank"
      rel="noopener"
      className={`
          w-10 h-10 prevent-select bg-primary-color flex items-center justify-center rounded-full fixed right-5 bottom-5 text-md px-2 cursor-pointer z-10
          transition-all duration-300
          hover:shadow-2xl hover:shadow-primary-color
        `}
    >
      <FaGithub className="text-white" />
    </a>
  );
};

export default CodeButton;
