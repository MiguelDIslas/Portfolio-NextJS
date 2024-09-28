import { IconType } from "react-icons";

/**
 * The props of the HardSkillIcon component.
 */
export type HardSkill = {
  /**
   * The name of the hard skill.
   */
  name: string;

  /**
   * The icon of the hard skill.
   */
  Icon: IconType;
};

type HardSkillIconProps = HardSkill;

/**
 * Component that displays the hard skill icon.
 */
const HardSkillIcon: React.FC<HardSkillIconProps> = ({ name, Icon }) => {
  return (
    <div className="flex items-center">
      <Icon
        className="w-28 h-28 text-white transition-all duration-75 ease-in-out
        hover:text-primary-color hover:drop-shadow-sm cursor-pointer"
        title={name}
      />
      <h6 className="ml-5">{name}</h6>
    </div>
  );
};

export default HardSkillIcon;
