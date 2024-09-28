import { IconType } from "react-icons";

/**
 * Props for the Subtitle component.
 */
type SmallTitleProps = {
  /**
   * Title of the component.
   */
  title: string;

  /**
   * Icon of the component.
   */
  Icon: IconType;
};

/**
 * Props for the Subtitle component.
 */
const Subtitle: React.FC<SmallTitleProps> = ({ title, Icon }) => {
  return (
    <div className="flex items-center">
      <Icon className="pr-4 text-5xl text-white" />
      <h3 className="text-white text-[2rem] font-bold prevent-select">
        {title}
      </h3>
    </div>
  );
};

export default Subtitle;
