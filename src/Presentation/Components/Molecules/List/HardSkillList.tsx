import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiCsharp,
  SiBlazor,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJava } from "react-icons/di";

import i18n from "@Language/i18n";
import Title from "@Components/Atom/Text/Title";
import HardSkillIcon, { HardSkill } from "@Components/Atom/Icon/HardSkillIcon";

/**
 * The list of hard skills.
 */
const skills: HardSkill[] = [
  { name: "React/Native", Icon: SiReact },
  { name: "Next.js", Icon: TbBrandNextjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Javascript", Icon: SiJavascript },
  { name: "C#", Icon: SiCsharp },
  { name: "Blazor", Icon: SiBlazor },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Nest.js", Icon: SiNestjs },
  { name: "Java", Icon: DiJava },
];

/**
 * This component is used to display a list of hard skills.
 */
const HardSkillList = () => {
  return (
    <div>
      <Title text={i18n.t('resume.title')} />
      <div className="py-20 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12">
          {skills.map((skill, index) => (
            <HardSkillIcon key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardSkillList;
