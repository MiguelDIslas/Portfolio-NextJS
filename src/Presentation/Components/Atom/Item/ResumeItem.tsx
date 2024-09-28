import React from "react";

/**
 * Props for the resume item.
 */
type ResumeItemProps = {
  /**
   * Title of the resume item.
   */
  title: string;

  /**
   * Company of the resume item.
   */
  company: string;

  /**
   * Company url of the resume item.
   */
  companyUrl: string;

  /**
   * Description of the resume item.
   */
  description: string;

  /**
   * Date of the resume item.
   */
  date: string;

  /**
   * Is company of the resume item.
   */
  isCompany?: boolean;
};

/**
 * This component is used to render a resume item.
 */
const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  company,
  companyUrl,
  description,
  date,
  isCompany = true,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <div
        className="w-1/4 pl-5 relative 
        before:content-[''] before:absolute before:-left-[10px] before:top-1 before:h-4 before:w-4
        before:rounded-full before:border-2 before:border-border-color before:bg-background-dark-color "
      >
        <p className="inline-block minimum:text-[80%] text-white mt-2 prevent-select">
          {date}
        </p>
      </div>
      <div className="w-3/4">
        <h5 className="text-primary-color text-[2rem] font-bold prevent-select">
          {title}
        </h5>
        <div className="py-3">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold cursor-pointer transition-all duration-300
              hover:text-react-color hover:underline hover:decoration-white
            "
            title={`${isCompany ? "Company" : "School"}: website`}
          >
            {company}
          </a>
        </div>
        <p className="prevent-select">{description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
