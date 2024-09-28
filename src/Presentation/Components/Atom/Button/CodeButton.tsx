import { FaGithub } from "react-icons/fa";

import i18n from "@Language/i18n";
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
          w-30 h-10 prevent-select bg-primary-color flex items-center justify-center rounded-full fixed right-5 bottom-5 text-md px-2 cursor-pointer z-10
          transition-all duration-300
          hover:shadow-2xl hover:shadow-primary-color
        `}
    >
      {i18n.t("general.code")} <FaGithub className="ml-2 text-white" />
    </a>
  );
};

export default CodeButton;
