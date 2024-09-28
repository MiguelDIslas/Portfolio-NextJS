import React from "react";

/**
 * The props of the Title component.
 */
type TitleProps = {
  /**
   * The title of the page
   */
  text: string;
};

/**
 * This component is used to set the head information of the page.
 */
const Title: React.FC<TitleProps> = ({ text }): JSX.Element => {
  return (
    <div className="relative">
      <h2 className="text-white text-[2rem] font-semibold uppercase relative pb-3 sm:text-[3.1rem] prevent-select">
        {text}
      </h2>
    </div>
  );
};

export default Title;
