import { MdBusinessCenter, MdSchool } from "react-icons/md";

import i18n from "@Language/i18n";
import Title from "@Components/Atom/Text/Title";
import Subtitle from "@Components/Atom/Text/Subtitle";
import ResumeItem from "@Components/Atom/Item/ResumeItem";

/**
 * Component for working experience
 */
const WorkingExperienceList = (): JSX.Element => {
  return (
    <div>
      <Title text={i18n.t("resume.title2")} />
      <div className="py-20 px-0">
        <div className="pb-12">
          <Subtitle
            title={i18n.t("resume.subtitle")}
            Icon={MdBusinessCenter}
          />
        </div>
        <div className="border-l-2 border-border-color">
          <ResumeItem
            title="Mobile Developer"
            company="Telstock"
            companyUrl="https://www.telstock.net/"
            description={i18n.t("resume.work.description1")}
            date={`2022 - ${i18n.t("general.now")}`}
          />
          <ResumeItem
            title="ASP.NET Intern"
            companyUrl="http://www.quanto.mx/"
            company="Syseti"
            description={i18n.t("resume.work.description2")}
            date="2020 - 2021"
          />
        </div>

        <div className="pt-24">
          <Subtitle title={i18n.t("resume.subtitle2")} Icon={MdSchool} />
        </div>
        <div className="border-l-2 border-border-color">
          <ResumeItem
            title="Computer Science Degree"
            company="Instituto Tecnológico de Delicias"
            companyUrl="https://www.delicias.tecnm.mx/"
            description={i18n.t("resume.work.description3")}
            date="2017 - 2022"
            isCompany={false}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingExperienceList;
